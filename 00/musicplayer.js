// class MusicPlayer{

//     constructor(musicList){
//         this.musicList = musicList
//         this.index = 0
//     }

//     getMusic(){
//         return this.musicList[this.index]
//     }

//     next(){
//         if (this.index != this.musicList.length-1 ) {
//             this.index++
//         }else{
//             this.index = 0
//         }
//     }

//     previous(){
//         if (this.index != 0 ) {
//             this.index--
//         }else{
//             this.index = this.musicList.length - 1
//         }
//     }

// }


class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;
        this.playbackSpeed = 1.0; // Default speed is 1.0x
    }

    getMusic() {
        return this.musicList[this.index];
    }

    setSpeed(speed) {
        // Validate speed to ensure it's a positive number
        if (typeof speed === 'number' && speed > 0) {
            this.playbackSpeed = speed;
        } else {
            console.error('Invalid playback speed. Please provide a positive number.');
        }
    }

    next() {
        if (this.index !== this.musicList.length - 1) {
            this.index++;
        } else {
            this.index = 0;
        }
    }

    previous() {
        if (this.index !== 0) {
            this.index--;
        } else {
            this.index = this.musicList.length - 1;
        }
    }
}
