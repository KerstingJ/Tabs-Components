class Carousel {
  constructor(element){
    this.element = element;
    this.images = Array.from(element.querySelectorAll(".fakeImage"));
    this.activeImage;
    setInterval(this.rotate.bind(this), 3000)
  }

  rotate(){
    // get active image
    this.activeImage = new CarouselImage(this.element.querySelector(".active-image"));

    // get the next image
    let currentId = parseInt(this.activeImage.element.dataset.imgid);
    let nextId = currentId + 1 > this.images.length? 1 : currentId + 1;
    console.log("next image is image: " + nextId);
    let nextImage = new CarouselImage(this.element.querySelector(`.fakeImage[data-imgid="${nextId}"]`))

    this.activeImage.fadeOut();
    nextImage.fadeIn();

    console.log("im doing my best!!!!")


    // let currentId = this.activeImage.element.dataset.imgid - 1; // our index
    // let nextId = currentId + 1 > this.images.length ? 1 :currentId + 1;
    // console.log("Selecting imgid: " + nextId);
    // let next = new CarouselImage(this.element.querySelector(`.fakeImage[data-imgid="${nextId}"]`));
    // this.activeImage.element.classList.toggle("active-image");
    // next.classList.toggle("active-image");
  }
}

class CarouselImage {
  constructor(element){
    this.element = element;
    this.state = "hidden";

  }

  fadeIn(){
    this.state = "visible";
    this.element.classList.toggle("active-image");
    this.element.style.maxWidth = "1000px";
  }

  fadeOut(){
    this.state = "hidden";
    this.element.classList.toggle("active-image");
    this.element.style.maxWidth = "1px";
  }

  get imgId(){
    return this.dataset.imgId;
  }
}

const carousel = new Carousel(document.querySelector(".carousel"));