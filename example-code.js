export default [
    {
      "prim": "storage",
      "args": [
        {
          "prim": "pair",
          "args": [
            {
              "prim": "pair",
              "args": [
                { "prim": "address", "annots": [ "%administrator" ] },
                {
                  "prim": "pair",
                  "args": [
                    { "prim": "int", "annots": [ "%decimals" ] },
                    {
                      "prim": "big_map",
                      "args": [
                        { "prim": "address" },
                        {
                          "prim": "pair",
                          "args": [
                            { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ], "annots": [ "%approvals" ] },
                            { "prim": "nat", "annots": [ "%balance" ] }
                          ]
                        }
                      ],
                      "annots": [ "%ledger" ]
                    }
                  ]
                }
              ]
            },
            {
              "prim": "pair",
              "args": [
                { "prim": "pair", "args": [ { "prim": "string", "annots": [ "%name" ] }, { "prim": "bool", "annots": [ "%paused" ] } ] },
                { "prim": "pair", "args": [ { "prim": "string", "annots": [ "%symbol" ] }, { "prim": "nat", "annots": [ "%totalSupply" ] } ] }
              ]
            }
          ]
        }
      ]
    },
    {
      "prim": "parameter",
      "args": [
        {
          "prim": "or",
          "args": [
            {
              "prim": "or",
              "args": [
                {
                  "prim": "or",
                  "args": [
                    { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%spender" ] }, { "prim": "nat", "annots": [ "%value" ] } ], "annots": [ "%approve" ] },
                    { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%address" ] }, { "prim": "nat", "annots": [ "%value" ] } ], "annots": [ "%burn" ] }
                  ]
                },
                {
                  "prim": "or",
                  "args": [
                    { "prim": "pair", "args": [ { "prim": "unit" }, { "prim": "contract", "args": [ { "prim": "address" } ] } ], "annots": [ "%getAdministrator" ] },
                    {
                      "prim": "or",
                      "args": [
                        {
                          "prim": "pair",
                          "args": [
                            { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%owner" ] }, { "prim": "address", "annots": [ "%spender" ] } ] },
                            { "prim": "contract", "args": [ { "prim": "nat" } ] }
                          ],
                          "annots": [ "%getAllowance" ]
                        },
                        { "prim": "pair", "args": [ { "prim": "address" }, { "prim": "contract", "args": [ { "prim": "nat" } ] } ], "annots": [ "%getBalance" ] }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "prim": "or",
              "args": [
                {
                  "prim": "or",
                  "args": [
                    { "prim": "pair", "args": [ { "prim": "unit" }, { "prim": "contract", "args": [ { "prim": "nat" } ] } ], "annots": [ "%getTotalSupply" ] },
                    { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%address" ] }, { "prim": "nat", "annots": [ "%value" ] } ], "annots": [ "%mint" ] }
                  ]
                },
                {
                  "prim": "or",
                  "args": [
                    { "prim": "address", "annots": [ "%setAdministrator" ] },
                    {
                      "prim": "or",
                      "args": [
                        { "prim": "bool", "annots": [ "%setPause" ] },
                        {
                          "prim": "pair",
                          "args": [
                            { "prim": "address", "annots": [ "%from" ] },
                            { "prim": "pair", "args": [ { "prim": "address", "annots": [ "%to" ] }, { "prim": "nat", "annots": [ "%value" ] } ] }
                          ],
                          "annots": [ "%transfer" ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "prim": "code",
      "args": [
        [
          { "prim": "UNPAIR" },
          {
            "prim": "IF_LEFT",
            "args": [
              [
                {
                  "prim": "IF_LEFT",
                  "args": [
                    [
                      {
                        "prim": "IF_LEFT",
                        "args": [
                          [
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CDR" },
                            { "prim": "CAR" },
                            { "prim": "CDR" },
                            {
                              "prim": "IF",
                              "args": [ [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: ~ self.data.paused" } ] }, { "prim": "FAILWITH" } ], [] ]
                            },
                            { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] },
                            { "prim": "DUP", "args": [ { "int": "3" } ] },
                            { "prim": "CAR" },
                            { "prim": "CDR" },
                            { "prim": "CDR" },
                            { "prim": "SENDER" },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "29" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "CAR" },
                            { "prim": "DUP", "args": [ { "int": "3" } ] },
                            { "prim": "CAR" },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] } ], [] ] },
                            { "prim": "COMPARE" },
                            { "prim": "EQ" },
                            {
                              "prim": "IF",
                              "args": [
                                [ { "prim": "PUSH", "args": [ { "prim": "bool" }, { "prim": "True" } ] } ],
                                [ { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "0" } ] }, { "prim": "COMPARE" }, { "prim": "EQ" } ]
                              ]
                            },
                            { "prim": "IF", "args": [ [], [ { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "UnsafeAllowanceChange" } ] }, { "prim": "FAILWITH" } ] ] },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "SENDER" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "31" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "UNPAIR" },
                            { "prim": "DUP", "args": [ { "int": "8" } ] },
                            { "prim": "CDR" },
                            { "prim": "SOME" },
                            { "prim": "DIG", "args": [ { "int": "8" } ] },
                            { "prim": "CAR" },
                            { "prim": "UPDATE" },
                            { "prim": "PAIR" },
                            { "prim": "SOME" },
                            { "prim": "SWAP" },
                            { "prim": "UPDATE" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "PAIR" }
                          ],
                          [
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "CAR" },
                            { "prim": "SENDER" },
                            { "prim": "COMPARE" },
                            { "prim": "EQ" },
                            {
                              "prim": "IF",
                              "args": [
                                [],
                                [
                                  { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: sp.sender == self.data.administrator" } ] },
                                  { "prim": "FAILWITH" }
                                ]
                              ]
                            },
                            { "prim": "DUP" },
                            { "prim": "CDR" },
                            { "prim": "DUP", "args": [ { "int": "3" } ] },
                            { "prim": "CAR" },
                            { "prim": "CDR" },
                            { "prim": "CDR" },
                            { "prim": "DUP", "args": [ { "int": "3" } ] },
                            { "prim": "CAR" },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "58" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "CDR" },
                            { "prim": "COMPARE" },
                            { "prim": "GE" },
                            {
                              "prim": "IF",
                              "args": [
                                [],
                                [
                                  { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: self.data.ledger[params.address].balance >= params.value" } ] },
                                  { "prim": "FAILWITH" }
                                ]
                              ]
                            },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "UNPAIR" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUP", "args": [ { "int": "6" } ] },
                            { "prim": "CAR" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "59" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "CAR" },
                            { "prim": "DUP", "args": [ { "int": "7" } ] },
                            { "prim": "CDR" },
                            { "prim": "DIG", "args": [ { "int": "8" } ] },
                            { "prim": "CAR" },
                            { "prim": "CDR" },
                            { "prim": "CDR" },
                            { "prim": "DUP", "args": [ { "int": "9" } ] },
                            { "prim": "CAR" },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "59" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "CDR" },
                            { "prim": "SUB" },
                            { "prim": "ISNAT" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "59" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SOME" },
                            { "prim": "SWAP" },
                            { "prim": "UPDATE" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "PAIR" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "CAR" },
                            { "prim": "DIG", "args": [ { "int": "3" } ] },
                            { "prim": "CDR" },
                            { "prim": "DIG", "args": [ { "int": "4" } ] },
                            { "prim": "GET", "args": [ { "int": "6" } ] },
                            { "prim": "SUB" },
                            { "prim": "ISNAT" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "60" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" }
                          ]
                        ]
                      },
                      { "prim": "NIL", "args": [ { "prim": "operation" } ] }
                    ],
                    [
                      {
                        "prim": "IF_LEFT",
                        "args": [
                          [
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "CAR" },
                            { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                            { "prim": "DIG", "args": [ { "int": "2" } ] },
                            { "prim": "CDR" },
                            { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] },
                            { "prim": "DIG", "args": [ { "int": "3" } ] },
                            { "prim": "TRANSFER_TOKENS" },
                            { "prim": "CONS" }
                          ],
                          [
                            {
                              "prim": "IF_LEFT",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CDR" },
                                  { "prim": "CDR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "72" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CAR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CDR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "72" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                                  { "prim": "DIG", "args": [ { "int": "2" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] },
                                  { "prim": "DIG", "args": [ { "int": "3" } ] },
                                  { "prim": "TRANSFER_TOKENS" },
                                  { "prim": "CONS" }
                                ],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CDR" },
                                  { "prim": "CDR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "68" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CDR" },
                                  { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                                  { "prim": "DIG", "args": [ { "int": "2" } ] },
                                  { "prim": "CDR" },
                                  { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] },
                                  { "prim": "DIG", "args": [ { "int": "3" } ] },
                                  { "prim": "TRANSFER_TOKENS" },
                                  { "prim": "CONS" }
                                ]
                              ]
                            }
                          ]
                        ]
                      }
                    ]
                  ]
                }
              ],
              [
                {
                  "prim": "IF_LEFT",
                  "args": [
                    [
                      {
                        "prim": "IF_LEFT",
                        "args": [
                          [
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "GET", "args": [ { "int": "6" } ] },
                            { "prim": "NIL", "args": [ { "prim": "operation" } ] },
                            { "prim": "DIG", "args": [ { "int": "2" } ] },
                            { "prim": "CDR" },
                            { "prim": "PUSH", "args": [ { "prim": "mutez" }, { "int": "0" } ] },
                            { "prim": "DIG", "args": [ { "int": "3" } ] },
                            { "prim": "TRANSFER_TOKENS" },
                            { "prim": "CONS" }
                          ],
                          [
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "CAR" },
                            { "prim": "SENDER" },
                            { "prim": "COMPARE" },
                            { "prim": "EQ" },
                            {
                              "prim": "IF",
                              "args": [
                                [],
                                [
                                  { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: sp.sender == self.data.administrator" } ] },
                                  { "prim": "FAILWITH" }
                                ]
                              ]
                            },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "CDR" },
                            { "prim": "CDR" },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "MEM" },
                            {
                              "prim": "IF",
                              "args": [
                                [],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  {
                                    "prim": "PUSH",
                                    "args": [
                                      {
                                        "prim": "option",
                                        "args": [
                                          {
                                            "prim": "pair",
                                            "args": [
                                              { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ], "annots": [ "%approvals" ] },
                                              { "prim": "nat", "annots": [ "%balance" ] }
                                            ]
                                          }
                                        ]
                                      },
                                      { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                    ]
                                  },
                                  { "prim": "DUP", "args": [ { "int": "6" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "UPDATE" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" }
                                ]
                              ]
                            },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUP", "args": [ { "int": "6" } ] },
                            { "prim": "CAR" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "GET" },
                            { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "50" } ] }, { "prim": "FAILWITH" } ], [] ] },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "DUP", "args": [ { "int": "8" } ] },
                            { "prim": "CDR" },
                            { "prim": "ADD" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SOME" },
                            { "prim": "SWAP" },
                            { "prim": "UPDATE" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "PAIR" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "SWAP" },
                            { "prim": "DIG", "args": [ { "int": "4" } ] },
                            { "prim": "CDR" },
                            { "prim": "ADD" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "SWAP" },
                            { "prim": "PAIR" },
                            { "prim": "NIL", "args": [ { "prim": "operation" } ] }
                          ]
                        ]
                      }
                    ],
                    [
                      {
                        "prim": "IF_LEFT",
                        "args": [
                          [
                            { "prim": "SWAP" },
                            { "prim": "DUP" },
                            { "prim": "DUG", "args": [ { "int": "2" } ] },
                            { "prim": "CAR" },
                            { "prim": "CAR" },
                            { "prim": "SENDER" },
                            { "prim": "COMPARE" },
                            { "prim": "EQ" },
                            {
                              "prim": "IF",
                              "args": [
                                [],
                                [
                                  { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: sp.sender == self.data.administrator" } ] },
                                  { "prim": "FAILWITH" }
                                ]
                              ]
                            },
                            { "prim": "SWAP" },
                            { "prim": "UNPAIR" },
                            { "prim": "CDR" },
                            { "prim": "DIG", "args": [ { "int": "2" } ] },
                            { "prim": "PAIR" },
                            { "prim": "PAIR" }
                          ],
                          [
                            {
                              "prim": "IF_LEFT",
                              "args": [
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [],
                                      [
                                        { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: sp.sender == self.data.administrator" } ] },
                                        { "prim": "FAILWITH" }
                                      ]
                                    ]
                                  },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "CAR" },
                                  { "prim": "DIG", "args": [ { "int": "3" } ] },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" }
                                ],
                                [
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "EQ" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [ { "prim": "PUSH", "args": [ { "prim": "bool" }, { "prim": "True" } ] } ],
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "CDR" },
                                        { "prim": "CAR" },
                                        { "prim": "CDR" },
                                        {
                                          "prim": "IF",
                                          "args": [
                                            [ { "prim": "PUSH", "args": [ { "prim": "bool" }, { "prim": "False" } ] } ],
                                            [
                                              { "prim": "DUP" },
                                              { "prim": "CAR" },
                                              { "prim": "SENDER" },
                                              { "prim": "COMPARE" },
                                              { "prim": "EQ" },
                                              {
                                                "prim": "IF",
                                                "args": [
                                                  [ { "prim": "PUSH", "args": [ { "prim": "bool" }, { "prim": "True" } ] } ],
                                                  [
                                                    { "prim": "DUP" },
                                                    { "prim": "GET", "args": [ { "int": "4" } ] },
                                                    { "prim": "DUP", "args": [ { "int": "3" } ] },
                                                    { "prim": "CAR" },
                                                    { "prim": "CDR" },
                                                    { "prim": "CDR" },
                                                    { "prim": "DUP", "args": [ { "int": "3" } ] },
                                                    { "prim": "CAR" },
                                                    { "prim": "GET" },
                                                    {
                                                      "prim": "IF_NONE",
                                                      "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "13" } ] }, { "prim": "FAILWITH" } ], [] ]
                                                    },
                                                    { "prim": "CAR" },
                                                    { "prim": "SENDER" },
                                                    { "prim": "GET" },
                                                    {
                                                      "prim": "IF_NONE",
                                                      "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "13" } ] }, { "prim": "FAILWITH" } ], [] ]
                                                    },
                                                    { "prim": "COMPARE" },
                                                    { "prim": "GE" }
                                                  ]
                                                ]
                                              }
                                            ]
                                          ]
                                        }
                                      ]
                                    ]
                                  },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [],
                                      [
                                        {
                                          "prim": "PUSH",
                                          "args": [
                                            { "prim": "string" },
                                            {
                                              "string":
                                                "WrongCondition: (sp.sender == self.data.administrator) | ((~ self.data.paused) & ((params.from_ == sp.sender) | (self.data.ledger[params.from_].approvals[sp.sender] >= params.value)))"
                                            }
                                          ]
                                        },
                                        { "prim": "FAILWITH" }
                                      ]
                                    ]
                                  },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CDR" },
                                  { "prim": "CDR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "MEM" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [],
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        {
                                          "prim": "PUSH",
                                          "args": [
                                            {
                                              "prim": "option",
                                              "args": [
                                                {
                                                  "prim": "pair",
                                                  "args": [
                                                    { "prim": "map", "args": [ { "prim": "address" }, { "prim": "nat" } ], "annots": [ "%approvals" ] },
                                                    { "prim": "nat", "annots": [ "%balance" ] }
                                                  ]
                                                }
                                              ]
                                            },
                                            { "prim": "Some", "args": [ { "prim": "Pair", "args": [ [], { "int": "0" } ] } ] }
                                          ]
                                        },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "GET", "args": [ { "int": "3" } ] },
                                        { "prim": "UPDATE" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" }
                                      ]
                                    ]
                                  },
                                  { "prim": "DUP" },
                                  { "prim": "GET", "args": [ { "int": "4" } ] },
                                  { "prim": "DUP", "args": [ { "int": "3" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CDR" },
                                  { "prim": "CDR" },
                                  { "prim": "DUP", "args": [ { "int": "3" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "18" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CDR" },
                                  { "prim": "COMPARE" },
                                  { "prim": "GE" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [],
                                      [
                                        { "prim": "PUSH", "args": [ { "prim": "string" }, { "string": "WrongCondition: self.data.ledger[params.from_].balance >= params.value" } ] },
                                        { "prim": "FAILWITH" }
                                      ]
                                    ]
                                  },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "UNPAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUP", "args": [ { "int": "6" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "19" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CAR" },
                                  { "prim": "DUP", "args": [ { "int": "7" } ] },
                                  { "prim": "GET", "args": [ { "int": "4" } ] },
                                  { "prim": "DIG", "args": [ { "int": "8" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "CDR" },
                                  { "prim": "CDR" },
                                  { "prim": "DUP", "args": [ { "int": "9" } ] },
                                  { "prim": "CAR" },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "19" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "CDR" },
                                  { "prim": "SUB" },
                                  { "prim": "ISNAT" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "19" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "SOME" },
                                  { "prim": "SWAP" },
                                  { "prim": "UPDATE" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "DUP", "args": [ { "int": "6" } ] },
                                  { "prim": "GET", "args": [ { "int": "3" } ] },
                                  { "prim": "DUP" },
                                  { "prim": "DUG", "args": [ { "int": "2" } ] },
                                  { "prim": "GET" },
                                  { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "20" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                  { "prim": "UNPAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP", "args": [ { "int": "8" } ] },
                                  { "prim": "GET", "args": [ { "int": "4" } ] },
                                  { "prim": "ADD" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "SOME" },
                                  { "prim": "SWAP" },
                                  { "prim": "UPDATE" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "PAIR" },
                                  { "prim": "PAIR" },
                                  { "prim": "SWAP" },
                                  { "prim": "DUP" },
                                  { "prim": "CAR" },
                                  { "prim": "SENDER" },
                                  { "prim": "COMPARE" },
                                  { "prim": "NEQ" },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [
                                        { "prim": "SENDER" },
                                        { "prim": "DUP", "args": [ { "int": "3" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "CAR" },
                                        { "prim": "COMPARE" },
                                        { "prim": "NEQ" }
                                      ],
                                      [ { "prim": "PUSH", "args": [ { "prim": "bool" }, { "prim": "False" } ] } ]
                                    ]
                                  },
                                  {
                                    "prim": "IF",
                                    "args": [
                                      [
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "UNPAIR" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "UNPAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "DUP" },
                                        { "prim": "DUP", "args": [ { "int": "6" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "DUP" },
                                        { "prim": "DUG", "args": [ { "int": "2" } ] },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "23" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "UNPAIR" },
                                        { "prim": "DUP", "args": [ { "int": "8" } ] },
                                        { "prim": "GET", "args": [ { "int": "4" } ] },
                                        { "prim": "DIG", "args": [ { "int": "9" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "CDR" },
                                        { "prim": "CDR" },
                                        { "prim": "DIG", "args": [ { "int": "9" } ] },
                                        { "prim": "CAR" },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "23" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "CAR" },
                                        { "prim": "SENDER" },
                                        { "prim": "GET" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "23" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "SUB" },
                                        { "prim": "ISNAT" },
                                        { "prim": "IF_NONE", "args": [ [ { "prim": "PUSH", "args": [ { "prim": "int" }, { "int": "23" } ] }, { "prim": "FAILWITH" } ], [] ] },
                                        { "prim": "SOME" },
                                        { "prim": "SENDER" },
                                        { "prim": "UPDATE" },
                                        { "prim": "PAIR" },
                                        { "prim": "SOME" },
                                        { "prim": "SWAP" },
                                        { "prim": "UPDATE" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "SWAP" },
                                        { "prim": "PAIR" },
                                        { "prim": "PAIR" }
                                      ],
                                      [ { "prim": "DROP" } ]
                                    ]
                                  }
                                ]
                              ]
                            }
                          ]
                        ]
                      },
                      { "prim": "NIL", "args": [ { "prim": "operation" } ] }
                    ]
                  ]
                }
              ]
            ]
          },
          { "prim": "PAIR" }
        ]
      ]
    }
  ];