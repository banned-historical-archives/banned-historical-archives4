export default {
  "entity": {
    "id": "e278107b-2b68-4970-87b2-c0b61b790811",
    "name": "毛泽东传（二）（中央文献出版社2011年）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央文献研究办公室",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/e278107b-2b68-4970-87b2-c0b61b790811.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东传（二）（中央文献出版社2011年）",
        "authors": [
          "中共中央文献研究办公室"
        ],
        "page_start": 5,
        "page_end": 510,
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
  "path": "e278107b-2b68-4970-87b2-c0b61b790811.pdf",
  "resource_type": "book",
  "version": 2
}