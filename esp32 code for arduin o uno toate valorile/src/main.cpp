#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <ArduinoJson.h>
#include <FS.h> // nu sterge, a dat o eroare la un moment dat
#include <HardwareSerial.h>
#include <SPIFFS.h>




//const char* ssid = "DIGI-3brj";
//const char* password = "AFEHT6a4";
//const char* ssid = "DIGI-5-c79C";
//const char* password = "BjYjv6q9";

const char* ssid = "hotspot";
const char* password = "unudoitreipatru";

//const char* ssid = "Tp Link!";
//const char* password = "camera100110111!";

//const char* ssid = "linksys";
//const char* password = "ducuducu";

//const char* ssid = "D101";
//const char* password = "burkus200556";
const int ledPin = 2;

const int rxPin = 16; // pini pt Serial2
const int txPin = 17;
HardwareSerial ESP32Serial(2);


AsyncWebServer server(80);
AsyncWebSocket ws("/ws");



void onEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len) {
  if (type == WS_EVT_CONNECT) {
    Serial.println("WebSocket client connectat");
    
  } else if (type == WS_EVT_DISCONNECT) {
    Serial.println("WebSocket client deconectat");
  }
}



void setup() {

  Serial.begin(115200); 

  pinMode(ledPin, OUTPUT);
  // dsp serial, modifica pt serial 1/0, 0 cred ca e de doar test
  ESP32Serial.begin(115200, SERIAL_8N1, rxPin, txPin); // Start UART with 115200 baud rate
  //ESP32Serial.begin(115200, SERIAL_8E1); //  8 data bits, Even parity, 1 stop bit
  //ESP32Serial.begin(115200, SERIAL_8E2); //  8 data bits Even parity, 2 stop bits
  //SERIAL_8O pt even parity1
 

  Serial.println("Json data transmissions to ESP32 on UART has started)");

  SPIFFS.begin();

  if (!SPIFFS.begin(true))
  {
    Serial.println("A apărut o eroare la montarea SPIFFS-urilor");
    return;
    }

    server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(SPIFFS, "/index.html", "text/html");
    });

    server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(SPIFFS, "/style.css", "text/css");
    });

    server.on("/app.js", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(SPIFFS, "/app.js", "text/javascript");
    });
  

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectare la WiFi...");
  }
  if (WiFi.status() == WL_CONNECTED){
    Serial.println("Conectat la WiFi!");
    delay(1000);
    Serial.print("Adresa Ip: ");
    Serial.println(WiFi.localIP()); }
    else
    Serial.println("Esuat in a se conecta");
    
     
  //scanNetworks();
   
  ws.onEvent(onEvent);
  server.addHandler(&ws); //atasare 'ws' la server folosind addHandler- asculta pentru conexiuni Websocket
  

  server.begin();

}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    digitalWrite(ledPin, HIGH); 
    delay(500);                
    digitalWrite(ledPin, LOW);  
    delay(500); 
    Serial.print("Adresa Ip: ");
    Serial.println(WiFi.localIP());
  }

static String jsonData; //  JSON data
while (ESP32Serial.available()) {
  char c = ESP32Serial.read(); // 
  if (c == '\n') { 
    if (jsonData.indexOf("\"ID\"") != -1) {
      // Parse JSON data doar daca contine "ID"
      StaticJsonDocument<2000> doc; 
      DeserializationError error = deserializeJson(doc, jsonData);
      if (!error) {
        Serial.println("Json primit:");
        serializeJsonPretty(doc, Serial); // Print JSON data pentru debugging
        // extrage campul "ID" 
        const char* ID = doc["ID"];
        Serial.print("ID: ");
        Serial.println(ID);

        long CTR = doc["CTR"]; 
        Serial.print("CTR: ");
        Serial.println(CTR);

        String output;
        serializeJson(doc, output);
        ws.textAll(output);
       } else {
        
        Serial.print("deserializeJson() failed: ");
        Serial.println(error.c_str());
       }
        } else {
        Serial.println("JSON nu contine 'ID'. Ignora.");}
     
        jsonData = ""; // Sterge bufferul
        }   else {
        jsonData += c; 
        }
}
}






