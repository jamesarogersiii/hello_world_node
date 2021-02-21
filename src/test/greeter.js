const greeter = require('../main/greeter.js');
 
describe('greeting', () => {
  it('is Hello World', () => {
    expect(greeter.greeting()).toEqual(
        [
            "Hello World",
            "Hola Mundo",
            "Ciao mondo",
            "Bonjour le monde",
            "你好，世界",
            "Hallo Welt",
            "Привет, мир",
            "こんにちは世界",
            "Γειά σου Κόσμε",
            "שלום עולם",
            "สวัสดีชาวโลก",
            "Ahoj světe",
            "Tere, Maailm",
            "Labas pasauli",
            "Hei Verden",
            "హలో వరల్డ్",
            "Hej världen",
            "Witaj świecie",
            "Kamusta Mundo"
          ]
    );
  });
});