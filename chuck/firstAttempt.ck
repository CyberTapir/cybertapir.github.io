// connect sine oscillator to D/A convertor (sound card)
SinOsc s => dac;
//SinOsc is a sine wave oscillator
//Sine oscilattor stored reference is s
//dac is a d/a converter

// allow 2 seconds to pass
2::second => now; //440hz

[1,0,0,0,1,0,0,0] @=> int chord_ptrn_1[]; 

//infinite while loop increasing the frequency
/*while( true ) {
    200::ms => now;
    Std.rand2f(30.0, 1000.0) => s.freq;
}*/

[[64, 70],[69, 72] @=> int chord_ptrn_1;
2::second => now;
