"use strict";

/*;
	@license:module:
		MIT License

		Copyright (c) 2021-present Richeve S. Bebedor <richeve.bebedor@gmail.com>

		@license:copyright:
			Richeve S. Bebedor

			<@license:year-range:2021-present;>

			<@license:contact-detail:richeve.bebedor@gmail.com;>
		@license:copyright;

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@license:module;
*/

const DEFAULT_LOG_TYPE = (
	"[default]"
);

const ERROR_LOG_TYPE = (
	"[error]"
);

const WARN_LOG_TYPE = (
	"[warn]"
);

const DONE_LOG_TYPE = (
	"[done]"
);

const PROMPT_LOG_TYPE = (
	"[prompt]"
);

const conciseLog = (
	function conciseLog( ){
		/*;
			@definition:
				@procedure: #log
					@description:
						This console log design consists of only the following information,
						1. UTC date and time stamp in format, YYYY-MM-DDTHH:mm:ss.SSSZ
						2. log type of the following values,
							a. default - no emphasis,
							b. error - emphasis on issue,
							c. warn - emphasis on possible issue,
							d. done - emphasis on assurance,
							e. prompt - emphasis on attention
						3. short message, concise and direct or summary detail only.
						4. reference link URI format or smart tag.
					@description;
				@procedure;

				@parameter: #logType
					@type:
							string
					@type;

					@description:
					@description;

					@required;
				@parameter;

				@parameter: #logMessageList
					@type:
							string
					@type;

					@description:
					@description;

					@required;
				@parameter;

				@parameter: #logReference
					@type:
							string
					@type;

					@description:
					@description;

					@required;
				@parameter;

				@result:#result
					@type:
							boolean
					@type;

					@description:
					@description;
				@result;

				@trigger: #trigger
					@type:
							object:as:Error
					@type;

					@description:
					@description;
				@trigger;
			@definition;
		*/

		const LOG_TYPE_LIST = (
			[
				DEFAULT_LOG_TYPE,
				ERROR_LOG_TYPE,
				WARN_LOG_TYPE,
				DONE_LOG_TYPE,
				PROMPT_LOG_TYPE
			]
		);

		const LOG_TYPE_MAP = (
			{
				[ DEFAULT_LOG_TYPE ]: "[D]",
				[ ERROR_LOG_TYPE ]: "[E]",
				[ WARN_LOG_TYPE ]: "[W]",
				[ DONE_LOG_TYPE ]: "[D]",
				[ PROMPT_LOG_TYPE ]: "[P]",
			}
		);

		const emitter = (
				(
					log
					.emitter
				)
			||
				(
					function emitter( ){ }
				)
		);

		let internalLog = (
			console
			.log
		);

		if(
				(
						typeof
						this
					==	"function"
				)
			&&
				(
						this
					!==	log
				)
		){
			(
					internalLog
				=	(
						this
					)
			);
		}

		const parameterList = (
			Array
			.from(
				(
					arguments
				)
			)
		);

		const logType = (
				parameterList
				.find(
					(
						( logToken ) => (
								(
										LOG_TYPE_LIST
										.some(
											(
												( logType ) => (
														(
																logType
															===	logToken
														)
												)
											)
										)
									=== true
								)
						)
					)
				)
			||
				(
					DEFAULT_LOG_TYPE
				)
		);

		const logReference = (
			parameterList
			.find(
				(
					( logToken ) => (
							( /^[a-z][a-z0-9]+?\:\/\// )
							.test( logToken )
						===	true
					)
				)
			)
		);

		const logMessageList = (
			parameterList
			.filter(
				(
					( logToken ) => (
							(
									logToken
								!==	logReference
							)
						&&
							(
									logToken
								!==	logType
							)
					)
				)
			)
		);

		const logStructure = (
			[
				(
					( new Date( ) ).toISOString( )
				),

				(
					LOG_TYPE_MAP[ logType ]
				),
			]
			.concat(
				(
					logMessageList
				)
			)
			.concat(
				(
					[
						(
								(
										(
												typeof
												logReference
											==	"string"
										)
									&&
										(
												logReference
												.length
											>	0
										)
								)
							?	(
									logReference
								)
							:	(
									undefined
								)
						),
					]
				)
			)
			.filter(
				(
					Boolean
				)
			)
		);

		internalLog(
			(
				logStructure
				.join(
					(
						" "
					)
				)
			)
		);

		emitter(
			(
				`log-${ logType.replace( /\W/g, "" ) }`
			),

			(
				logStructure
			)
		);

		return	(
					concise
				);
	}
);

const logError = (
	function logError( ){
		return	(
					conciseLog
					.apply(
						(
								(
										(
												typeof
												this
											==	"function"
										)
								)
							?	(
									(
										function( ){
											const parameterList = (
												Array
												.from(
													(
														arguments
													)
												)
											);

											this( ...parameterList )

											console
											.error( ...parameterList );
										}
									)
									.bind( this )
								)
							:	(
									console
									.error
								)
						),

						(
							[
								ERROR_LOG_TYPE
							]
							.concat(
								(
									Array
									.from(
										(
											arguments
										)
									)
								)
							)
						)
					)
				);
	}
);

const logWarn = (
	function logWarn( ){
		return	(
					conciseLog
					.apply(
						(
							this
						),

						(
							[
								WARN_LOG_TYPE
							]
							.concat(
								(
									Array
									.from(
										(
											arguments
										)
									)
								)
							)
						)
					)
				);
	}
);

const logDone = (
	function logDone( ){
		return	(
					conciseLog
					.apply(
						(
							this
						),

						(
							[
								DONE_LOG_TYPE
							]
							.concat(
								(
									Array
									.from(
										(
											arguments
										)
									)
								)
							)
						)
					)
				);
	}
);

const logPrompt = (
	function logPrompt( ){
		return	(
					conciseLog
					.apply(
						(
							this
						),

						(
							[
								PROMPT_LOG_TYPE
							]
							.concat(
								(
									Array
									.from(
										(
											arguments
										)
									)
								)
							)
						)
					)
				);
	}
);

const setLogEmitter = (
	function setLogEmitter( emitter ){
		if(
				(
						typeof
						emitter
					==	"function"
				)
		){
			(
					conciseLog
					.emitter
				=	(
						emitter
					)
			);

			return	(
						true
					);
		}

		return	(
					false
				);
	}
);

(
		conciseLog
		.error
	=	(
			logError
		)
);

(
		conciseLog
		.warn
	=	(
			logWarn
		)
);

(
		conciseLog
		.done
	=	(
			logDone
		)
);

(
		conciseLog
		.prompt
	=	(
			logPrompt
		)
);

(
		conciseLog
		.setLogEmitter
	=	(
			setLogEmitter
		)
);

(
	(
		function( ){
			if(
					(
							typeof
							concise
						!=	"object"
					)
				||
					(
							concise
						===	null
					)
			){
				(
						concise
					=	(
								(
									concise
								)
							||
								(
									{ }
								)
						)
				);
			}

			(
					concise
					.log
				=	(
						conciseLog
						.bind( concise )
					)
			);
		}
	)( )
);

(
		module
		.exports
	=	(
			conciseLog
			.bind( concise )
		)
);
