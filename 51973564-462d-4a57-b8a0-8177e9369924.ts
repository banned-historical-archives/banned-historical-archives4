export default {
  "entity": {
    "id": "51973564-462d-4a57-b8a0-8177e9369924",
    "name": "毛泽东传（五）（中央文献出版社2011年）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央文献研究室",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/51973564-462d-4a57-b8a0-8177e9369924.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东传（五）（中央文献出版社2011年）",
        "authors": [
          "中共中央文献研究室"
        ],
        "page_start": 5,
        "page_end": 428,
        "dates": [
          {
            "year": 2011,
            "month": 1
          }
        ]
      }
    ],
    "ocr": {
      "extract_text_from_pdf": false,
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "51973564-462d-4a57-b8a0-8177e9369924.pdf",
  "resource_type": "book",
  "version": 2
}