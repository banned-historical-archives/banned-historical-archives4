export default {
  "entity": {
    "id": "7583d371-70a2-4de1-9ea7-c83b76d1a11e",
    "name": "毛泽东传（六）（中央文献出版社2011年）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央文献研究室",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/7583d371-70a2-4de1-9ea7-c83b76d1a11e.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东传（六）（中央文献出版社2011年）",
        "authors": [
          "中共中央文献研究室"
        ],
        "page_start": 6,
        "page_end": 500,
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
  "path": "7583d371-70a2-4de1-9ea7-c83b76d1a11e.pdf",
  "resource_type": "book",
  "version": 2
}