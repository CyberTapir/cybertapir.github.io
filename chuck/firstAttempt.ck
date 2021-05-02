// connect sine oscillator to D/A convertor (sound card)
SinOsc s => dac;
//SinOsc is a sine wave oscillator
//Sine oscilattor stored reference is s
//dac is a d/a converter

// allow 2 seconds to pass
2::second => now;