export let styles = `*{
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: #9e2b09;
}
body {
  padding: 0;
  margin: 0;
  // background-color: bisque;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 0%, rgba(253,93,46,1) 50%, rgba(252,176,69,1) 100%);  
  font-family: sans-serif;
  font-size: 20px;
  color: #9e2b09;
}
.container {
  padding: 25px 25px 0 25px;
}
.title{
  text-align: left;
  margin: 40px 0 20px 25px;
}
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.movie-item {
  flex-direction: column;
  margin: 15px;
}
.movie-title{
  display: flex;  
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  text-align: center;
  margin: 0px;
  padding: 20px 0;
  transition: .5s all;
  z-index: 1;
}
.movie-title:hover{
  // text-decoration: underline;
  cursor: pointer;
  // background-color: rgba(210,144,123,0.74);
  color: #e8d26f

}
.movie-img {
  display: block;
  border-radius: 5px;
  border: 3px solid #9e2b09;
  padding: 2px;
  margin: 0 auto;

  margin-bottom: 10px;
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 2/3;  
  transition: .5s all;
}
.movie-img:hover{
  filter: grayscale(1);
  cursor: pointer;
  transform: scale(1.05);
  border-radius: 10px;
}
.search__group{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 15px 0 10px 25px;
  color: #9e2b09;
}

.search__group--input{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
input[type="search"] {
  margin:10px 0;
  min-width: 25%; 
  font-size: 17px;
  padding: 10px;
  background-color: transparent;
  border:none;
  border-bottom: 2px solid #c77055;
  color: #9e2b09;
  transition: .5s all;
}
input:focus{
  border-bottom: 2px solid #5e4f05;
  // transition: .3s all;
  outline: none;
}
input:focus::placeholder {
  border:none;
  color:#5e4f05;
  transition: 1s all;
}
input::placeholder {
  color: #c77055;
  transition: 1s all;
}
.input__label{
  font-size: 23px;
}
.checkbox__label{
  user-select: none;
  cursor: pointer;
}
.input-checkbox{
  width:15px;
  height: 15px;
}

.checkbox__label{
  margin-left: 15px;
}

@media (max-width: 650px) {
  body{
    font-size: 15px;
  }
  .movies {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  .movie-item {
    margin: 10px;
  }
  input[type="search"] {
    min-width: 25%;
  }
  .title{
    margin: 20px 0 10px 25px;
    font-size: 30px;
  }
  .search__group {
    margin: 10px 0 5px 25px;
  }
  lable[for="search"] {
    font-size: 20px;
  }
}
@media (max-width: 450px) {
  .wrapper{
    // display: flex;
    // // flex-direction: column;
    // // align-items: center;
    // // justify-content: center;
  }
  lable[for="search"] {
    font-size: 20px;
    text-align: center;
  }
  body{
    font-size: 16px;
  }
  .movies {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  .movie-item {
    margin: 5px;
  }
  .movie-img {
    max-width: 100%;
  }
  input[type="search"] {
    min-width: 10%;
    font-size: 15px;
  }
  .search__group {
    margin: 15px 0 5px 25px;
  }
  lable[for="checkbox"] {
    // padding-top: 5px;
  }
  .title{
    margin: 10px 0 5px 25px;
    font-size: 25px;
  }
}
@media (max-width: 360px) {
  .title{
    text-align: center;
    margin: 10px 0;
  }
  .search__group--input{
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    // margin: 10px 0;
    margin:10px 0px;  
  }
  .movie-title{
    font-size: 13px;
  }
  input[type="search"] {
    min-width: 6%;
  }
  .search__group--checkbox{
    margin: 5px 0;
    display: flex;

    justify-content: center;
  }
}`;
