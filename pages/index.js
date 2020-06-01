import Link from 'next/link'
import { MongoClient } from "mongodb"

export default function Home({ myDoc }) {


  console.log('myDoc index page');
  console.log(myDoc);



  return (
    <div>
        <h6>version 21.09</h6>
        <h3>{myDoc}</h3>
        <ul>
          <li>
            <Link href="/b" as="/a">
              <a>a</a>
            </Link>
          </li>
          <li>
            <Link href="/a" as="/b">
              <a>b</a>
            </Link>
          </li>
        </ul>
    </div>
  )
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  const url = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pass}@fishstack1142-g7g61.gcp.mongodb.net/test4?retryWrites=true&w=majority`;
  console.log(url);


const client = new MongoClient(url, {useUnifiedTopology: true});
 
 // The database to use
 const dbName = 'test4';

 var myDoc = 'man';             
 async function run() {
  try {
       await client.connect();
       console.log("Connected correctly to server");
       const db = client.db(dbName);

       // Use the collection "people"
       const col = db.collection("people");

       // Construct a document                                                                                                                                                              
       let personDocument = {
           "name": { "first": "Peter", "last": "Sareewong" },
           "birth": new Date(1969, 5, 23), // June 23, 1912                                                                                                                                 
           "death": new Date(1970, 5, 7),  // June 7, 1954                                                                                                                                  
           "contribs": [ "Computers", "PDA", "Books" ],
           "views": 1250000
       }

       // Insert a single document, wait for promise so we can read it back
      //  const p = await col.insertOne(personDocument);
       // Find one document
        myDoc = await col.findOne();
       // Print to the console
       console.log('myDoc is is ');
       console.log(myDoc);
       console.log(myDoc.name.last);
      //  myDoc = myDoc.name.last
       console.log(typeof myDoc);

      } catch (err) {
       console.log(err.stack);
   }

   finally {
      await client.close();
  }

  console.log(myDoc);

  return JSON.stringify(myDoc)
}

run().catch(console.dir);

myDoc = await run();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {

      myDoc
    },
  }
}
