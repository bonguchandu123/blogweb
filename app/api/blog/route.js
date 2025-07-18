import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
import {writeFile} from 'fs/promises'
const {fs} = require('fs')

const { NextResponse } = require("next/server")




const LoadDB = async () => {
    await ConnectDB();
    
}
LoadDB();
export async function GET(request){
    const blogId = request.nextUrl.searchParams.get("id")
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);

    }
    // after creating addproduct the we write
    const blogs = await BlogModel.find({});
   



   
    return NextResponse.json({blogs})

}

export async function POST(request) {
    const formData = await request.formData();
    const timeStamp =Date.now();


    const image = formData.get('image');
    const imgByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imgByteData)
    const path = `./public/${timeStamp}_${image.name}`
    await writeFile(path,buffer);
    const imgURL = `/${timeStamp}_${image.name}`

    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgURL}`,
        authorImg:`${formData.get('authorImg')}`
        
    }

    await BlogModel.create(blogData)
    console.log("BLog Saved")






    console.log(imgURL);
    return NextResponse.json({success:true,msg:"BlOG ADDDED"})
    
}


// Creating api endpoint delete blog 


export async function DELETE(req) {
    const id = await req.nextUrl.searchParams.get('id')
    const blog = await BlogModel.findById(id)

    fs.unlink(`./public${blog.image}`,()=> {})
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"BLog deleted"})

    
}
