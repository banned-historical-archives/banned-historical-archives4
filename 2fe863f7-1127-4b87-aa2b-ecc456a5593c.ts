export default {
  "entity": {
    "id": "2fe863f7-1127-4b87-aa2b-ecc456a5593c",
    "name": "良知的拷问——一个清华文革头头的心路历程",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "孙怒涛",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/2fe863f7-1127-4b87-aa2b-ecc456a5593c.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "良知的拷问——一个清华文革头头的心路历程",
        "authors": [
          "孙怒涛"
        ],
        "page_start": 9,
        "page_end": 771,
        "dates": [
          {
            "year": 2013,
            "month": 2
          }
        ]
      }
    ],
    "ocr": {
      "extract_text_from_pdf": true,
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "2fe863f7-1127-4b87-aa2b-ecc456a5593c.pdf",
  "resource_type": "book",
  "version": 2
}