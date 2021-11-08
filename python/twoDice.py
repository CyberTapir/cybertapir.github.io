import random
times = int(input("How many times would you like to roll two 6-sided dice? "))
two = 0;three = 0;four = 0;five = 0;six = 0;seven = 0;eight = 0;nine = 0;ten = 0;eleven = 0;twelve = 0
for i in range(times):
    o1 = random.randint(1,6)
    o2 = random.randint(1,6)
    output = o1 + o2
    print(output)
    match output:
        case 2:
            two += 1
        case 3:
            three += 1
        case 4:
            four += 1
        case 5: 
            five += 1
        case 6:
            six += 1
        case 7:
            seven += 1
        case 8:
            eight += 1
        case 9:
            nine += 1
        case 10:
            ten += 1
        case 11:
            eleven += 1
        case 12:
            twelve += 1
print("Condensed Results")
print("2: " + str(two))
print("3: " + str(three))
print("4: " + str(four))
print("5: " + str(five))
print("6: " + str(six))
print("7: " + str(seven))
print("8: " + str(eight))
print("9: " + str(nine))
print("10: " + str(ten))
print("11: " + str(eleven))
print("12: " + str(twelve))