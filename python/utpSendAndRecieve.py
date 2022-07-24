#frameworks
import socket

#variables
sendToIp = "" #IP address goes here
sendToPort = 1000 #Port number goes here
message = b"Hello UTP Server!"

#Print statements
print("Target IP: " + sendToIp)
print("Target port: " + str(sendToPort))
print("Sent Message: " + str(message))

#connect and send packet
sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP
sock.sendto(message, (sendToIp, sendToPort))

#Recieving the message
while True:
    data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes
    print("Recieved Messsage " + str(data))
