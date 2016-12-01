using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNHttpserver
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNHttpserverModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNHttpserverModule"/>.
        /// </summary>
        internal RNHttpserverModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNHttpserver";
            }
        }
    }
}
