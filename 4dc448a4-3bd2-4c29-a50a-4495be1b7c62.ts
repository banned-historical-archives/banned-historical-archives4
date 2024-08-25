export default {
  "entity": {
    "id": "4dc448a4-3bd2-4c29-a50a-4495be1b7c62",
    "name": "周恩来年谱（1898-1949）（上）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央文献研究室",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/4dc448a4-3bd2-4c29-a50a-4495be1b7c62.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "周恩来年谱（1898-1949）（上）",
        "authors": [
          "中共中央文献研究室"
        ],
        "page_start": 5,
        "page_end": 449,
        "dates": [
          {
            "year": 2007,
            "month": 9
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
  "path": "4dc448a4-3bd2-4c29-a50a-4495be1b7c62.pdf",
  "resource_type": "book",
  "version": 2
}