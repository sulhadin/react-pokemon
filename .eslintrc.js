module.exports = {
  extends: [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  plugins: [
    "flowtype"
  ],
  rules: {
    "import/prefer-default-export": [0,{}],
    "import/no-extraneous-dependencies": [0,{}],
    "arrow-body-style": [0],
    "react/jsx-filename-extension": [1,{"extensions": [".js",".jsx"]}],
    "react/prop-types": [2,{}],
    "react/require-default-props": [1,{}],
    "react/forbid-prop-types": [0,{}],
    "max-len": ["error", { "code": 300 }],
    "react/jsx-props-no-spreading": [0,{ }],
    "max-classes-per-file": [0, 1],
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.object.name='console'][callee.property.name=/^(log|trace)$/]",
        "message": "Unexpected property on console object was called"
      }
    ],
    "react/sort-comp": [
      0,
      {
        "order": [
          "lifecycle",
          "render"
        ],
        "groups": {
          "lifecycle": [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount"
          ]
        }
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.common.js"
      }
    }
  },
  "env": {
    "browser": true,
    "node": true
  }
};
