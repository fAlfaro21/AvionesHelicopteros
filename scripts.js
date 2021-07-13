const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

let allVehicles = [];
// const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
// const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
// const painter = new Painter();

class Gallery {
    
    constructor(civilImages, militaryImages) {
        this.myCivilImages = civilImages;
        this.myMilitaryImages = militaryImages;
    }
    
    getRandomCivil() {        
        let civilI = Math.floor(Math.random() * this.myCivilImages.length);
        return this.myCivilImages[civilI];
    }
    
    getRandomMilitary() {        
        let militaryI = Math.floor(Math.random() * this.myMilitaryImages.length);
        return this.myMilitaryImages[militaryI];
    }
    
    getAll() {        
        this.myCivilImages.forEach(element => {
            allVehicles.push(element);
        });

        this.myMilitaryImages.forEach(element => {
            allVehicles.push(element);
        });   
        return allVehicles; 
    }
    
}


class Painter {
    constructor() {
        this.createGallery();
    }    

    createGallery() {
        this.gallery = document.createElement("section");
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        this.printPicture = document.createElement("picture");
        this.printImg = document.createElement("img");
        this.printPicture.appendChild(this.printImg);

        this.printImg.setAttribute("src", imageUrl);
       
        return this.printPicture;
    }

    paintSingleImage(imageUrl) {
        this.gallery.appendChild(this.createImageTag(imageUrl));
    }

    paintMultipleImages(arrayOfImages) {

        arrayOfImages.forEach(element => {
            this.gallery.appendChild(this.createImageTag(element));            
        });
    }
}

 const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
 const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
 const painter = new Painter();