import { Router } from "express"
import { PublisherModel } from "../schema/publisher.js"

const PublisherRouter = Router()

PublisherRouter.post("/", async (req, res) => {
    console.log('출판사 등록 시작')
    const data = {
        name: req.body.name,
    }

    const result = await PublisherModel.create(data);

    if(result) {
        console.log('출판사 등록 성공')
        res.send({
            message: "성공적으로 등록되었습니다",
            name: result.name,
        })
    }
})

PublisherRouter.get("/:publisher", async (req, res) => {
    console.log('출판사 조회 시작')
    const { publisher } = req.params
    const result = await PublisherModel.findOne({ name: publisher });
    
    if(result) {
        console.log('출판사 조회 성공')
        res.send({
            name: result.name,
            
        })
    }
})

export default PublisherRouter