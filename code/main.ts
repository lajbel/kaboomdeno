import kaboom from "https://esm.sh/kaboom@2000.2.9";

kaboom({
	burp: true,
});

loadSprite("bean", "./sprites/bean.png")

add([
	sprite("bean"),
	pos(40, 80)
]);