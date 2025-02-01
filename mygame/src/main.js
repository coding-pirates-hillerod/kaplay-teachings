import kaplay from "kaplay";

const k = kaplay();

k.loadSprite("bean", "sprites/bean.png");

k.scene("game", () => {
  k.add([k.pos(120, 80), k.sprite("bean")]);
  k.onClick(() => k.addKaboom(k.mousePos()));
});

k.go("game");
