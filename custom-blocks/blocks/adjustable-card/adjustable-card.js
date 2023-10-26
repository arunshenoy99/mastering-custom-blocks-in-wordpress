import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

registerBlockType( 'custom-blocks/adjustable-card', {
	title: __( 'Adjustable Card', 'custom-blocks' ),
	category: 'custom-blocks',
	attributes: {
		heading: { type: 'string' },
		quote: { type: 'string' },
		source: { type: 'string' },
		showHeader: { type: 'boolean', default: true },
	},
	edit: EditComponent,
	save: SaveComponent,
} );

function EditComponent( props ) {
	function handleQuoteChange( newValue ) {
		props.setAttributes( { quote: newValue } );
	}

	function handleSourceChange( newValue ) {
		props.setAttributes( { source: newValue } );
	}

	function handleHeadingChange( newValue ) {
		props.setAttributes( { heading: newValue } );
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={ true === props.attributes.showHeader }
						onClick={ () =>
							props.setAttributes( {
								showHeader: ! props.attributes.showHeader,
							} )
						}
					>
						{ __( 'Header', 'custom-blocks' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<div className="card">
				{ props.attributes.showHeader && (
					<div className="card-header">
						<RichText
							value={ props.attributes.heading }
							onChange={ handleHeadingChange }
							placeholder={ __(
								'Card Heading',
								'custom-blocks'
							) }
						/>
					</div>
				) }
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<RichText
							value={ props.attributes.quote }
							onChange={ handleQuoteChange }
							placeholder={ __(
								'Card Citation',
								'custom-blocks'
							) }
						/>
						<footer className="blockquote-footer">
							<cite title="Source Title">
								<RichText
									value={ props.attributes.source }
									onChange={ handleSourceChange }
									placeholder={ __(
										'Enter source here',
										'custom-blocks'
									) }
								/>
							</cite>
						</footer>
					</blockquote>
				</div>
			</div>
		</>
	);
}

function SaveComponent( props ) {
	return (
		<div className="card">
			{ props.attributes.showHeader && (
				<div className="card-header">
					<RichText.Content value={ props.attributes.heading } />
				</div>
			) }
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<RichText.Content value={ props.attributes.quote } />
					<footer className="blockquote-footer">
						<cite title="Source Title">
							<RichText.Content
								value={ props.attributes.source }
							/>
						</cite>
					</footer>
				</blockquote>
			</div>
		</div>
	);
}
