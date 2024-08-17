export default {
  "entity": {
    "id": "ab44c8ab-e737-4dea-a7dc-7d30b1f0725b",
    "name": "文革的政治与困境——陈伯达与“造反”的时代",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "白承旭",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/ab44c8ab-e737-4dea-a7dc-7d30b1f0725b.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "文革的政治与困境——陈伯达与“造反”的时代",
        "authors": [
          "白承旭"
        ],
        "page_start": 5,
        "page_end": 301,
        "dates": [
          {
            "year": 2014,
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
  "path": "ab44c8ab-e737-4dea-a7dc-7d30b1f0725b.pdf",
  "resource_type": "book",
  "version": 2
}