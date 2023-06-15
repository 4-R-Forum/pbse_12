"""

There can be several square edged blocks

"""
y = 0
x = 0

def on_every_interval():
    pass
loops.every_interval(500, on_every_interval)

def on_forever():
    global y
    basic.pause(2000)
    y = y + 1
    basic.show_string(convert_to_text(y))
basic.forever(on_forever)
