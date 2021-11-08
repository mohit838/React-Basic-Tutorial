const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const currentYear = date.getFullYear()

//Rules of Destructuring for array
const array = ['a', 'b', 'c'];
const [a, b, c] = array;


function Card(props){
  return  <div className="card">
            <div className="name">{props.titleText}</div>
            <div className="name">{props.nameData}</div>
            <div className="date">{dateName+ "/" + dateMonth + "/" +currentYear}</div>         
          </div>
}

// Export file for import another file
export default Card;
