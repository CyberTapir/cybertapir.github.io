start = 100
value = 1
result = 0
for i in range(start):
	result += value
	value = value + 1
	if value == start + 1:
		print(result)
	continue