class Form {

  constructor() {
    
    this.input = createInput("name");
    this.button = createButton('play');
    this.greeting = createElement('h2');
  }

  hide() {

    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position((displayWidth - 40)/2, 0);
    
    this.input.position((displayWidth - 40)/2, (displayHeight - 30)/2);
    this.button.position((displayWidth + 55)/2, (displayHeight + 15)/2);

    this.button.mousePressed( () => {
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name );
      this.greeting.position((displayWidth - 40)/2, (displayHeight - 30)/2);
    });

  }
}
