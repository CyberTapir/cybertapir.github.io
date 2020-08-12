import time
import RPi.GPIO

GPIO.setmode(BPIO.BCM)
GPIO.setup(4, GPIO.OUT)
GPIO.setup(26, GPIO.OUT)

isOn = False

while True:
  if isOn == True:
    GPIO.output(4, GPIO.HIGH)
    GPIO.output(26, GPIO.LOW)
    print("Tick")
    isOn = False
  else:
    GPIO.output(4, GPIO.LOW)
    GPIO.output(26, GPIO.HIGH)
    print("Tock")
    isOn = True
  time.sleep(1)
