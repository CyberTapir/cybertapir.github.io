SinOsc chord[3];

for (0 => int i; i < chord.cap(); i++){
    chord[i] => dac;
    1.0/chord.cap() => chord[i].gain;
}
fun void playChord(int root, string quality, dur howLong){
    Std.mtof(root) => chord[0].freq;
    Std.mtof(root+7) => chord[2].freq;
}
3::second => now;