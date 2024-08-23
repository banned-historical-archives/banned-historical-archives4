export default {
  "entity": {
    "id": "b143e353-007c-496b-b2d7-9a2074850437",
    "name": "毛泽东传（四）（中央文献出版社2011年）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央文献研究室",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/b143e353-007c-496b-b2d7-9a2074850437.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东传（四）（中央文献出版社2011年）",
        "authors": [
          "中共中央文献研究室"
        ],
        "page_start": 5,
        "page_end": 423,
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
  "path": "b143e353-007c-496b-b2d7-9a2074850437.pdf",
  "resource_type": "book",
  "version": 2
}