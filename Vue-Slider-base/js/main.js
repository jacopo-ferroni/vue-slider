/*
 * Vue Slider
 */
console.log(Vue);
const app = new Vue ({

    el : `#app`,

    data : {
    
        images : [

            {
                img : `./img/01.jpg`,
                title : `Norvegia`,
                text : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.`,
            },
        
            {
                img : `./img/02.jpg`,
                title : `Terra di Mezzo`,
                text : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.`,
            },
        
            {
                img : `./img/03.jpg`,
                title : `Inghilterra`,
                text : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.`,
            },
        
            {
                img : `./img/04.jpg`,
                title : `Bho`,
                text : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.`,
            },
            
            {
                img : `./img/05.jpg`,
                title : `Maldive`,
                text : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.`,
            },

        ],

        activeSlide : 0,
    
    },

    methods : {

        clickNext () {
    
            console.log(`fo cess`);
    
            this.activeSlide++;
    
            if(this.activeSlide === this.images.length) {
                this.activeSlide = 0;
            }
        },
    
        clickBefore () {
    
            this.activeSlide--;
    
            if(this.activeSlide < 0) {
                this.activeSlide = this.images.length - 1;
            }
        },

        clickThis (indice) {
            
            this.activeSlide = indice;

        }

    },


});