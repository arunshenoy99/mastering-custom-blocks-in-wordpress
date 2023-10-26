import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import {
	RichText,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

registerBlockType( 'custom-blocks/dynamic-card', {
	title: __( 'Dynamic Card', 'custom-blocks' ),
	category: 'custom-blocks',
	attributes: {
		heading: { type: 'string' },
		quote: { type: 'string' },
		source: { type: 'string' },
		showHeader: { type: 'boolean', default: true },
		color: { type: 'string' },
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

	function setHeaderColor( newValue ) {
		props.setAttributes( { color: newValue } );
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
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings', 'custom-blocks' ) }
					colorSettings={ [
						{
							value: props.attributes.color,
							onChange: setHeaderColor,
							label: __( 'Header Color', 'custom-blocks' ),
						},
					] }
				/>
			</InspectorControls>
			<div className="card">
				{ props.attributes.showHeader && (
					<div
						className="card-header"
						style={ { backgroundColor: props.attributes.color } }
					>
						<RichText
							tagvalue={ props.attributes.heading }
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

function SaveComponent() {
	return <></>;
}
