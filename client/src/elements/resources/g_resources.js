//@flow

cc.loader.resPath = 'res/';
cc.loader.audioPath = 'res/audio/';

function res() {
  return [

    /// Sprites
    /////////////////////////////////////////////////////////////////////
    'HelloWorld.png'

    /// Scenes
    /////////////////////////////////////////////////////////////////////
    //, ...

    /// Sounds
    /////////////////////////////////////////////////////////////////////
    //, ...

    /// Fonts
    /////////////////////////////////////////////////////////////////////
    //, ...

  ];
}

window.g_resources = res();
