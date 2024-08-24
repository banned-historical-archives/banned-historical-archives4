export default {
  "entity": {
    "id": "755727bd-0111-4518-8739-bfacceb5c880",
    "name": "周恩来传（一）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央文献研究室",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/755727bd-0111-4518-8739-bfacceb5c880.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "周恩来传（一）",
        "authors": [
          "中共中央文献研究室"
        ],
        "page_start": 10,
        "page_end": 443,
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
  "path": "755727bd-0111-4518-8739-bfacceb5c880.pdf",
  "resource_type": "book",
  "version": 2
}