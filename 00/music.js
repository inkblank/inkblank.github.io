const bg_image = 'bg_1.jpeg'
const name_1 = '999x Cultivation System'
const auth_1 = '妖舞'

class Music{

    constructor(base_){
        this.title = base_ + ' - ' + name_1
        this.singer = auth_1
        this.img = bg_image
        this.file = base_+'.mp3'
    }

    getName(){
        return `${this.title} - ${this.singer}`
    }
}

const musicList = [
    new Music("0000"),
    new Music("0001"),
    new Music("0002"),
    new Music("0003"),
    new Music("0004"),
    new Music("0005"),
    new Music("0006"),
    new Music("0007"),
    new Music("0008"),
    new Music("0009"),
    new Music("0010"),
    new Music("0011"),
    new Music("0012"),
    new Music("0013"),
    new Music("0014"),
    new Music("0015"),
    new Music("0016"),
    new Music("0017"),
    new Music("0018"),
    new Music("0019"),
    new Music("0020"),
    new Music("0021"),
    new Music("0022"),
    new Music("0023"),
    new Music("0024"),
    new Music("0025"),
    new Music("0026"),
    new Music("0027"),
    new Music("0028"),
    new Music("0029"),
    new Music("0030"),
    new Music("0031"),
    new Music("0032"),
    new Music("0033"),
    new Music("0034"),
    new Music("0035"),
    new Music("0036"),
    new Music("0037"),
    new Music("0038"),
    new Music("0039"),
    new Music("0040"),
    new Music("0041"),
    new Music("0042"),
    new Music("0043"),
    new Music("0044"),
    new Music("0045"),
    new Music("0046"),
    new Music("0047"),
    new Music("0048"),
    new Music("0049"),
    new Music("0050"),
]
