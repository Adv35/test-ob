OLED12864_I2C.init(60)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    OLED12864_I2C.showString(
    0,
    0,
    "dir:",
    1
    )
    OLED12864_I2C.showString(
    6,
    0,
    "     ",
    1
    )
    OLED12864_I2C.showNumber(
    6,
    0,
    input.compassHeading(),
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "sp1:",
    1
    )
    OLED12864_I2C.showNumber(
    6,
    1,
    OrientBit.course_correct(90, 35)[0],
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "sp2:",
    1
    )
    OLED12864_I2C.showNumber(
    6,
    2,
    OrientBit.course_correct(90, 35)[1],
    1
    )
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
})
basic.forever(function () {
	
})
