import turtle;

turtle = turtle.Turtle()

def drawCircle(radius, x, y):
    turtle.speed(1)
    turtle.penup
    turtle.setpos(x,y)
    turtle.forward(radius)
    turtle.pendown
    turtle.circle(radius)

drawCircle(100,10,10)