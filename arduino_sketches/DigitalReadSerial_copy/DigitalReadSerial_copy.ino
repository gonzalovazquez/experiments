/*
  DigitalReadSerial

  Reads a digital input on pin 2, prints the result to the Serial Monitor

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/DigitalReadSerial
*/

// digital pin 2 has a pushbutton attached to it. Give it a name:
int pushButton = 2;

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  // make the pushbutton's pin an input:
  pinMode(pushButton, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input pin:
  int buttonState = digitalRead(pushButton);
  String stringOne = "Hello String On";
  String stringOff = "Hello String Off";
  // print out the state of the button:
  Serial.println(buttonState);
  delay(1);        // delay in between reads for stability
  if (buttonState = 0) {
    Serial.println(stringOff);
    digitalWrite(LED_BUILTIN, LOW);
    delay(1); 
  }
  if (buttonState = 1) {
    Serial.println(stringOne);
    digitalWrite(LED_BUILTIN, HIGH); 
    delay(1);
  }
}
