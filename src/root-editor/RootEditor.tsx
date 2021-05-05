import React from 'react'

import { createSlatePluginsComponents, createSlatePluginsOptions, SlatePlugins } from "@udecode/slate-plugins"
import { configDefault } from "../../src/defaults"
import { RootEditorProps } from "./types"
import { replaceHotkeys } from "./utils"





export const RootEditor = ({ config = configDefault, initialValue }: RootEditorProps): JSX.Element => {




    const _initialvalue = initialValue
    const _plugins = config.plugins
    const _components = createSlatePluginsComponents(config.components)
    const _options = replaceHotkeys(createSlatePluginsOptions(), config.layout)

    // const _editableProps: EditableProps = {
    //     onKeyDown: (e) => console.log("EEE", e)
    // }
    return (
        // <div
        //  onKeyDown={e => {
        //     e.preventDefault()
        //     console.log(e.key, (e.key === "é"))
        // }
        // }>

        <SlatePlugins initialValue={_initialvalue} plugins={_plugins} components={_components} options={_options} />
        // </div>
    )
}