report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Homepage_0_document_0_tablet.png",
        "test": "../bitmaps_test/20181019-012427/backstop_default_Homepage_0_document_0_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Homepage_0_document_0_tablet.png",
        "label": "Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.01,
        "url": "http://localhost:63342/ya_performance/docs/index.html",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00",
          "analysisTime": 130
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});