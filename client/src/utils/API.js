import axios from "axios";

const SOURCEURL = "https://www.googleapis.com/books/v1/volumes?q="
export default {
    search: function(query){
        return axios.get(SOURCEURL + query);
    },
    saveBook : function(newbook){
        return axios.post("/api/books", newbook)    
},
getBooks : function(){
    return axios.get("/api/books")
},
delBook : function(id){
    return axios.delete("api/books/" + id)
}

};