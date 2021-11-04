"use strict";

exports default (
	{
		"module": [
			{
				"title": "Format JSON File",
				"description": [
					"Reformat JSON file to use hard tab and double quotes."
				],

				"namespace": "format-json-file",
				"alias": "",
				"property": [
					"formatJSONFile"
				],
				"type": [
					"procedure"
				],

				"format": [
					"formatJSONFile( filePath, optionData );"
				],
				"sample": [
					"await formatJSONFile( './package.json' );"
				],

				"parameter": [
					{
						"title": "File Path",
						"description": [
							"Set file path to JSON file."
						],

						"namespace": "file-path",
						"alias": "",
						"property": [
							"filePath"
						],
						"type": [
							"string"
						],

						"format": [
							"formatJSONFile( filePath );"
						],
						"sample": [
							"await formatJSONFile( './package.json' );"
						],

						"required": true
					},

					{
						"title": "Option Data",
						"description": [
							"Extended procedure parameter."
						],

						"namespace": "option-data",
						"alias": "",
						"property": [
							"optionData"
						],
						"type": [
							"object:with:[sortProperty]",
							"object:with:[propertyList]"
						],

						"format": [
							"formatJSONFile( filePath, optionData );"
						],
						"sample": [
							"await formatJSONFile( './package.json', { 'sortProperty': true } );"
						],

						"optional": true
					},

					{
						"title": "Sort Property",
						"description": [
							"Enable default package property sort procedure."
						],

						"namespace": "option-data:sort-property",
						"alias": "",
						"property": [
							"optionData.sortProperty"
						],
						"type": [
							"boolean"
						],

						"format": [
							"formatJSONFile( filePath, { 'sortProperty': true } );"
						],
						"sample": [
							"await formatJSONFile( './package.json', { 'sortProperty': true } );"
						],

						"optional": true
					},

					{
						"title": "Property List",
						"description": [
							"Override default package property sort procedure."
						],

						"namespace": "option-data:property-list",
						"alias": "",
						"property": [
							"optionData.propertyList"
						],
						"type": [
							"object:as:Array:of:string"
						],

						"format": [
							"formatJSONFile( filePath, { 'sortProperty': true, 'propertyList': [ ] } );"
						],
						"sample": [
							"await formatJSONFile( './package.json', { 'sortProperty': true, 'propertyList': [ 'name', 'alias', 'version' ] } );"
						],

						"optional": true
					}
				],

				"result": [
					{
						"title": "Result",
						"description": [
							"Result of format JSON file procedure."
						],

						"namespace": "result",
						"alias": "",
						"property": [
							"result"
						],
						"type": [
							"boolean"
						],

						"format": [
							""
						],
						"sample": [
							""
						]
					}
				],

				"trigger": [
					{
						"title": "Trigger",
						"description": [
							"Trigger of format JSON file procedure."
						],

						"namespace": "trigger",
						"alias": "",
						"property": [
							"trigger"
						],
						"type": [
							"object:as:Error"
						],

						"format": [
							""
						],
						"sample": [
							""
						],

						"tag": [
							"invalid-json-file-path",
							"cannot-format-json-file"
						]
					}
				]
			},
			{
				"title": "Format JSON File",
				"description": [
					"Reformat JSON file to use hard tab and double quotes."
				],

				"namespace": "format-json-file",
				"alias": "fjf",
				"type": [
					"shell"
				],

				"format": [
					"format-json-file <filePath>",
					"format-json-file --filePath <filePath>"
				],
				"sample": [
					"format-json-file ./package.json",
					"format-json-file --filePath ./package.json"
				],

				"parameter": [
					{
						"title": "Version",
						"description": [
							"Show module version."
						],

						"namespace": "version",
						"alias": "v",
						"property": [
							"versionStatus"
						],
						"type": [
							"boolean"
						],

						"format": [
							"--version",
							"--v"
						],
						"sample": [
							"format-json-file --version"
						]
					},

					{
						"title": "Help",
						"description": [
							"Show help module."
						],

						"namespace": "help",
						"alias": "h",
						"property": [
							"helpStatus",
							"helpShellParameter"
						],
						"type": [
							"boolean",
							"string"
						],

						"format": [
							"--help [helpShellParameter]",
							"--h [helpShellParameter]"
						],
						"sample": [
							"format-json-file --help",
							"format-json-file --help filePath"
						]
					},

					{
						"title": "Install Module",
						"description": [
							"Install module to global."
						],

						"namespace": "installModule",
						"alias": "im",
						"property": [
							"installModuleStatus"
						],
						"type": [
							"boolean"
						],

						"format": [
							"--installModule",
							"--im"
						],
						"sample": [
							"format-json-file --installModule"
						]
					},

					{
						"title": "Link Module",
						"description": [
							"Link module to global."
						],

						"namespace": "linkModule",
						"alias": "lm",
						"property": [
							"linkModuleStatus"
						],
						"type": [
							"boolean"
						],

						"format": [
							"--linkModule",
							"--lm"
						],
						"sample": [
							"format-json-file --linkModule"
						]
					},

					{
						"title": "Uninstall Module",
						"description": [
							"Uninstall module from global."
						],

						"namespace": "uninstallModule",
						"alias": "um",
						"property": [
							"uninstallModuleStatus"
						],
						"type": [
							"boolean"
						],

						"format": [
							"--uninstallModule",
							"--um"
						],
						"sample": [
							"format-json-file --uninstallModule"
						]
					},

					{
						"title": "File Path",
						"description": [
							"Set file path to JSON file."
						],

						"namespace": "filePath",
						"alias": "fp",
						"property": [
							"filePath"
						],
						"type": [
							"string"
						],

						"format": [
							"--filePath <filePath>",
							"--fp <filePath>"
						],
						"sample": [
							"format-json-file --filePath package.json"
						]
					},

					{
						"title": "Sort Property",
						"description": [
							"Enable default package property sort procedure."
						],

						"namespace": "sortProperty",
						"alias": "sp",
						"property": [
							"sortProperty"
						],
						"type": [
							"boolean"
						],

						"format": [
							"--sortProperty",
							"--sp"
						],
						"sample": [
							"format-json-file --filePath package.json --sortProperty"
						]
					},

					{
						"title": "Property List",
						"description": [
							"Override default package property sort procedure."
						],

						"namespace": "propertyList",
						"alias": "pl",
						"property": [
							"propertyList"
						],
						"type": [
							"object:as:Array:of:string"
						],

						"format": [
							"--propertyList <propertyList>",
							"--pl <propertyList>"
						],
						"sample": [
							`
								format-json-file
									--filePath package.json
									--sortProperty
									--propertyList name,alias,version
							`
						]
					}
				]
			}
		]
	}
)
