const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const currentYear = date.getFullYear()

function Card(props){
  return  <div className="card">
            <div className="name">{props.title}</div>
            <div>{dateName+ "/" + dateMonth + "/" +currentYear}</div>         
          </div>
}

// Export file for import another file
export default Card;
