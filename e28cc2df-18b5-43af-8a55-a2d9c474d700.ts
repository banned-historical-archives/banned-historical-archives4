export default {
  "entity": {
    "id": "e28cc2df-18b5-43af-8a55-a2d9c474d700",
    "name": "高家村——共和国农村生活素描",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "高默波",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/e28cc2df-18b5-43af-8a55-a2d9c474d700.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "高家村——共和国农村生活素描",
        "authors": [
          "高默波"
        ],
        "page_start": 6,
        "page_end": 288,
        "dates": [
          {
            "year": 2013
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
  "path": "e28cc2df-18b5-43af-8a55-a2d9c474d700.pdf",
  "resource_type": "book",
  "version": 2
}