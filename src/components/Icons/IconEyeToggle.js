import React from "react";

function IconEyeToggle({ toggleEye = false }) {
  if (toggleEye) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="436"
        height="94"
        fill="none"
        viewBox="0 0 436 94">
        <path
          fill="#4B5264"
          d="M2.464 25H.945V14.675h3.108c.793 0 1.458.15 1.995.448.541.299.947.702 1.218 1.211.275.504.413 1.069.413 1.694a3.63 3.63 0 01-.42 1.729 3.145 3.145 0 01-1.225 1.26c-.541.317-1.202.476-1.981.476H2.464V25zm0-4.025l-.686-.742h2.1c.495 0 .91-.089 1.246-.266.34-.182.597-.439.77-.77.173-.331.259-.721.259-1.169 0-.448-.084-.828-.252-1.141a1.614 1.614 0 00-.756-.707c-.336-.163-.758-.245-1.267-.245h-2.1l.686-.798v5.838zm8.995 4.172c-.56 0-1.053-.089-1.477-.266a2.22 2.22 0 01-.98-.763c-.234-.331-.35-.73-.35-1.197 0-.5.13-.912.392-1.239.266-.327.63-.579 1.092-.756a5.889 5.889 0 011.589-.357c.882-.089 1.502-.175 1.862-.259.364-.084.546-.222.546-.413v-.014a.948.948 0 00-.483-.861c-.322-.196-.782-.294-1.38-.294-.63 0-1.117.112-1.462.336-.341.22-.511.57-.511 1.05H8.806c0-.57.147-1.052.44-1.449.3-.397.71-.698 1.233-.903.522-.21 1.122-.315 1.799-.315.62 0 1.185.096 1.694.287.513.187.921.467 1.225.84.303.373.455.838.455 1.393v3.549c0 .173.007.34.02.504.015.159.04.301.078.427.042.145.09.264.147.357.06.093.11.159.147.196h-1.512a1.156 1.156 0 01-.126-.175 2.169 2.169 0 01-.238-.721 4.133 4.133 0 01-.028-.497l.28.196c-.14.27-.353.506-.637.707-.28.2-.619.357-1.015.469a4.76 4.76 0 01-1.31.168zm.315-1.26c.434 0 .828-.068 1.183-.203.359-.14.646-.35.86-.63.215-.285.323-.642.323-1.071v-1.232l.357.469a5.726 5.726 0 01-1.1.287c-.429.07-.872.128-1.33.175-.63.056-1.103.166-1.42.329-.318.159-.476.425-.476.798 0 .36.13.63.392.812.266.177.67.266 1.21.266zm8.648 1.26c-.443 0-.861-.049-1.253-.147a3.577 3.577 0 01-1.036-.427 2.176 2.176 0 01-.693-.707 1.895 1.895 0 01-.245-.973v-.098-.091h1.512v.14c0 .34.156.6.469.777.317.173.747.259 1.288.259.317 0 .607-.033.868-.098.266-.065.476-.166.63-.301a.65.65 0 00.238-.518c0-.34-.168-.583-.504-.728-.331-.145-.835-.273-1.512-.385a9.668 9.668 0 01-1.071-.252 3.958 3.958 0 01-.924-.406 2.122 2.122 0 01-.651-.637c-.159-.257-.238-.565-.238-.924 0-.467.14-.863.42-1.19.28-.327.658-.574 1.134-.742a4.705 4.705 0 011.575-.252 4.24 4.24 0 011.54.273c.476.177.859.436 1.148.777.29.336.434.749.434 1.239v.126h-1.505v-.049-.049a.805.805 0 00-.231-.595 1.41 1.41 0 00-.602-.343 2.487 2.487 0 00-.777-.119 3.57 3.57 0 00-.763.084 1.495 1.495 0 00-.63.273.612.612 0 00-.252.518c0 .224.082.404.245.539.163.13.394.24.693.329.299.084.646.161 1.043.231.364.065.719.15 1.064.252.345.098.656.229.931.392.28.163.502.373.665.63.168.257.252.572.252.945 0 .387-.089.721-.266 1.001-.177.28-.42.513-.728.7a3.525 3.525 0 01-1.043.406c-.387.093-.796.14-1.225.14zm7.861 0c-.443 0-.86-.049-1.253-.147a3.577 3.577 0 01-1.036-.427 2.176 2.176 0 01-.693-.707 1.895 1.895 0 01-.245-.973v-.098-.091h1.512v.14c0 .34.157.6.47.777.317.173.746.259 1.287.259.318 0 .607-.033.868-.098.266-.065.476-.166.63-.301a.65.65 0 00.238-.518c0-.34-.168-.583-.504-.728-.331-.145-.835-.273-1.512-.385a9.668 9.668 0 01-1.07-.252 3.958 3.958 0 01-.925-.406 2.122 2.122 0 01-.65-.637c-.16-.257-.239-.565-.239-.924 0-.467.14-.863.42-1.19.28-.327.658-.574 1.134-.742a4.705 4.705 0 011.575-.252 4.24 4.24 0 011.54.273c.476.177.859.436 1.148.777.29.336.434.749.434 1.239v.126h-1.505v-.049-.049a.805.805 0 00-.23-.595 1.41 1.41 0 00-.603-.343 2.487 2.487 0 00-.777-.119 3.57 3.57 0 00-.763.084 1.495 1.495 0 00-.63.273.612.612 0 00-.252.518c0 .224.082.404.245.539.164.13.395.24.693.329.299.084.647.161 1.043.231.364.065.719.15 1.064.252.346.098.656.229.931.392.28.163.502.373.665.63.168.257.252.572.252.945 0 .387-.088.721-.266 1.001-.177.28-.42.513-.728.7a3.525 3.525 0 01-1.043.406c-.387.093-.795.14-1.225.14zM39.02 25l-1.904-7.434h1.232l1.827 6.881h-.259l1.19-6.881h1.575L41.112 25H39.02zm-5.075 0l-1.575-7.434h1.575l1.204 6.881h-.266l1.813-6.881h1.232L36.051 25h-2.107zm13.557.14c-.765 0-1.442-.166-2.03-.497a3.602 3.602 0 01-1.372-1.365c-.327-.583-.49-1.25-.49-2.002 0-.747.163-1.407.49-1.981a3.503 3.503 0 011.372-1.351c.588-.327 1.265-.49 2.03-.49.765 0 1.44.163 2.023.49a3.443 3.443 0 011.372 1.351c.331.574.497 1.234.497 1.981 0 .751-.166 1.419-.497 2.002a3.539 3.539 0 01-1.372 1.365c-.583.331-1.258.497-2.023.497zm0-1.302c.467 0 .877-.105 1.232-.315a2.19 2.19 0 00.833-.889c.2-.387.301-.84.301-1.358 0-.513-.1-.959-.301-1.337-.2-.378-.478-.67-.833-.875a2.415 2.415 0 00-1.232-.308c-.462 0-.873.103-1.232.308a2.153 2.153 0 00-.833.875c-.2.378-.301.824-.301 1.337 0 .518.1.97.301 1.358.2.383.478.679.833.889.36.21.77.315 1.232.315zM53.084 25v-7.434h1.519v2.373l-.406-.182c.032-.303.11-.593.23-.868a2.61 2.61 0 01.484-.735c.205-.22.457-.392.756-.518a2.648 2.648 0 011.036-.189c.298 0 .539.023.72.07.188.047.302.084.344.112l-.322 1.428a1.387 1.387 0 00-.287-.126c-.14-.051-.336-.077-.588-.077-.383 0-.7.068-.952.203a1.643 1.643 0 00-.602.539c-.15.224-.257.469-.322.735a3.49 3.49 0 00-.091.791V25h-1.52zm8.85.147a3.335 3.335 0 01-1.688-.441c-.513-.299-.924-.737-1.232-1.316-.308-.579-.462-1.286-.462-2.121 0-.817.157-1.51.47-2.079.312-.57.725-1.001 1.238-1.295a3.268 3.268 0 011.673-.448c.579 0 1.116.14 1.61.42.5.28.901.67 1.204 1.169.304.495.455 1.066.455 1.715v.098l-.882.028v-.042-.049c0-.387-.098-.73-.294-1.029a2.08 2.08 0 00-.777-.714 2.05 2.05 0 00-1.015-.266c-.602 0-1.106.203-1.512.609-.406.401-.609 1.029-.609 1.883 0 .85.203 1.48.61 1.89.41.406.914.609 1.511.609.374 0 .719-.089 1.036-.266.318-.182.572-.43.763-.742a2.01 2.01 0 00.287-1.071l.882.035c0 .644-.147 1.225-.44 1.743-.29.518-.682.929-1.177 1.232a3.11 3.11 0 01-1.652.448zM64.32 25V14.059h1.526V25H64.32zm9.69-8.379l1.065 1.225-.651.434-1.043-1.386-1.05 1.386-.651-.434 1.064-1.225-1.554-.525.35-.644 1.47.567-.042-1.421h.819l-.042 1.421 1.47-.567.35.644-1.554.525z"></path>
        <path
          fill="#B2B3BD"
          d="M33.813 68.346c0 .43-.08.866-.238 1.309a3.937 3.937 0 01-.721 1.232 3.615 3.615 0 01-1.218.917c-.49.229-1.066.343-1.729.343-.9 0-1.668-.226-2.303-.679-.63-.457-1.11-1.085-1.442-1.883-.331-.798-.497-1.713-.497-2.744 0-1.036.166-1.95.497-2.744.331-.798.812-1.423 1.442-1.876.635-.453 1.402-.679 2.303-.679.751 0 1.39.147 1.918.441a3.6 3.6 0 011.267 1.134c.317.462.527.943.63 1.442.06.27.091.527.091.77h-1.526c0-.13-.012-.273-.035-.427a2.516 2.516 0 00-.378-1.029 2.178 2.178 0 00-.791-.749c-.327-.187-.719-.28-1.176-.28-.532 0-1.001.15-1.407.448-.406.294-.723.737-.952 1.33-.224.593-.336 1.332-.336 2.219 0 .882.112 1.622.336 2.219.229.593.546 1.04.952 1.344.406.299.875.448 1.407.448.387 0 .728-.07 1.022-.21.294-.14.541-.329.742-.567.2-.238.352-.506.455-.805.107-.299.161-.607.161-.924h1.526zM35.469 72v-7.434h1.519v2.373l-.406-.182c.032-.303.11-.593.23-.868.122-.275.283-.52.484-.735.205-.22.457-.392.756-.518a2.648 2.648 0 011.036-.189c.298 0 .539.023.72.07.187.047.302.084.344.112l-.322 1.428a1.39 1.39 0 00-.287-.126c-.14-.051-.336-.077-.588-.077-.383 0-.7.068-.952.203a1.642 1.642 0 00-.602.539c-.15.224-.257.469-.322.735-.061.261-.091.525-.091.791V72h-1.52zm6.308-3.185v-1.183h5.474l-.21.35v-.084-.084c0-.378-.081-.726-.245-1.043a1.85 1.85 0 00-.735-.77c-.322-.196-.725-.294-1.21-.294-.486 0-.913.105-1.282.315-.364.205-.649.5-.854.882-.2.378-.3.833-.3 1.365 0 .541.097 1.008.293 1.4.196.387.479.686.847.896.369.21.81.315 1.323.315.36 0 .67-.035.931-.105.266-.075.483-.173.651-.294.173-.121.303-.252.392-.392a1.01 1.01 0 00.154-.427h1.512a2.2 2.2 0 01-.3.903 2.763 2.763 0 01-.722.805c-.308.238-.686.43-1.134.574-.443.14-.954.21-1.533.21-.775 0-1.453-.163-2.037-.49a3.504 3.504 0 01-1.365-1.358c-.327-.583-.49-1.25-.49-2.002 0-.765.166-1.437.497-2.016a3.49 3.49 0 011.38-1.351c.587-.327 1.261-.49 2.022-.49.775 0 1.445.163 2.01.49.569.327 1.007.777 1.315 1.351.308.574.462 1.234.462 1.981 0 .089-.002.191-.007.308a1.589 1.589 0 01-.02.238h-6.819zm11.115 3.332c-.56 0-1.052-.089-1.477-.266a2.219 2.219 0 01-.98-.763c-.233-.331-.35-.73-.35-1.197 0-.5.13-.912.392-1.239.266-.327.63-.579 1.092-.756a5.889 5.889 0 011.59-.357c.881-.089 1.502-.175 1.861-.259.364-.084.546-.222.546-.413v-.014a.948.948 0 00-.483-.861c-.322-.196-.781-.294-1.379-.294-.63 0-1.117.112-1.463.336-.34.22-.51.57-.51 1.05h-1.492c0-.57.147-1.052.441-1.449.299-.397.71-.698 1.232-.903.523-.21 1.123-.315 1.8-.315.62 0 1.185.096 1.693.287.514.187.922.467 1.225.84.304.373.455.838.455 1.393v3.549c0 .173.007.34.021.504.014.159.04.301.077.427.042.145.091.264.147.357.06.093.11.159.147.196h-1.512a1.156 1.156 0 01-.126-.175 2.169 2.169 0 01-.238-.721 4.133 4.133 0 01-.028-.497l.28.196c-.14.27-.352.506-.637.707-.28.2-.618.357-1.015.469a4.76 4.76 0 01-1.309.168zm.315-1.26c.434 0 .829-.068 1.183-.203.36-.14.647-.35.861-.63.215-.285.322-.642.322-1.071v-1.232l.357.469a5.726 5.726 0 01-1.099.287c-.43.07-.872.128-1.33.175-.63.056-1.103.166-1.42.329-.318.159-.477.425-.477.798 0 .36.13.63.392.812.266.177.67.266 1.211.266zm8.71 1.239c-.248 0-.495-.026-.743-.077a1.94 1.94 0 01-.672-.28c-.2-.14-.361-.338-.483-.595-.121-.257-.182-.593-.182-1.008v-.308-4.032h-1.785v-1.26h.938c.2 0 .357-.007.47-.021.116-.019.2-.058.251-.119.056-.065.091-.168.105-.308a6.09 6.09 0 00.021-.574v-1.435h1.52v2.457h2.274v1.26h-2.275v3.836c0 .373.044.667.133.882.094.215.303.322.63.322.14 0 .273-.012.4-.035.125-.023.22-.049.286-.077v1.239a2.037 2.037 0 01-.357.091 3 3 0 01-.532.042zm3.485-3.311v-1.183h5.474l-.21.35v-.084-.084c0-.378-.081-.726-.245-1.043a1.85 1.85 0 00-.735-.77c-.322-.196-.726-.294-1.21-.294-.486 0-.913.105-1.282.315-.364.205-.648.5-.854.882-.2.378-.3.833-.3 1.365 0 .541.097 1.008.293 1.4.196.387.478.686.847.896.369.21.81.315 1.323.315.36 0 .67-.035.931-.105.266-.075.483-.173.651-.294.173-.121.303-.252.392-.392a1.01 1.01 0 00.154-.427h1.512a2.2 2.2 0 01-.3.903 2.763 2.763 0 01-.722.805c-.308.238-.686.43-1.134.574-.443.14-.954.21-1.533.21-.774 0-1.453-.163-2.037-.49a3.504 3.504 0 01-1.365-1.358c-.327-.583-.49-1.25-.49-2.002 0-.765.166-1.437.497-2.016a3.49 3.49 0 011.38-1.351c.587-.327 1.262-.49 2.022-.49.775 0 1.445.163 2.01.49.569.327 1.007.777 1.315 1.351.308.574.462 1.234.462 1.981 0 .089-.002.191-.007.308a1.589 1.589 0 01-.02.238h-6.819zm14.629 3.332c-.56 0-1.052-.089-1.477-.266a2.22 2.22 0 01-.98-.763c-.233-.331-.35-.73-.35-1.197 0-.5.13-.912.392-1.239.266-.327.63-.579 1.092-.756a5.89 5.89 0 011.589-.357c.882-.089 1.503-.175 1.862-.259.364-.084.546-.222.546-.413v-.014a.948.948 0 00-.483-.861c-.322-.196-.782-.294-1.38-.294-.63 0-1.117.112-1.462.336-.34.22-.511.57-.511 1.05h-1.491c0-.57.147-1.052.44-1.449.3-.397.71-.698 1.233-.903.523-.21 1.122-.315 1.799-.315.62 0 1.185.096 1.694.287.513.187.922.467 1.225.84.303.373.455.838.455 1.393v3.549c0 .173.007.34.02.504.015.159.04.301.078.427.042.145.09.264.147.357.06.093.11.159.147.196h-1.512a1.156 1.156 0 01-.126-.175 2.177 2.177 0 01-.238-.721 4.154 4.154 0 01-.028-.497l.28.196c-.14.27-.352.506-.637.707-.28.2-.618.357-1.015.469a4.759 4.759 0 01-1.31.168zm.315-1.26c.434 0 .828-.068 1.183-.203.36-.14.646-.35.86-.63.216-.285.323-.642.323-1.071v-1.232l.357.469a5.724 5.724 0 01-1.1.287c-.428.07-.872.128-1.33.175-.63.056-1.103.166-1.42.329-.317.159-.476.425-.476.798 0 .36.13.63.392.812.266.177.67.266 1.21.266zm9.222 4.172V64.566h1.52v10.493h-1.52zm3.913-2.912a3.134 3.134 0 01-1.61-.434 3.459 3.459 0 01-1.204-1.204 3.31 3.31 0 01-.455-1.729v-.042-.042l.882-.021v.07c0 .383.098.728.294 1.036.2.303.46.544.777.721.318.177.658.266 1.022.266.598 0 1.1-.203 1.505-.609.41-.41.616-1.04.616-1.89 0-.854-.203-1.482-.609-1.883-.406-.406-.91-.609-1.512-.609-.364 0-.704.089-1.022.266-.317.173-.576.41-.777.714a1.833 1.833 0 00-.294 1.029l-.882-.035c0-.649.152-1.22.455-1.715.308-.5.71-.889 1.204-1.169a3.214 3.214 0 011.61-.42 3.268 3.268 0 012.912 1.743c.318.57.476 1.262.476 2.079 0 .835-.154 1.542-.462 2.121-.308.579-.718 1.017-1.232 1.316a3.348 3.348 0 01-1.694.441zm7.646 0c-.56 0-1.053-.089-1.477-.266a2.22 2.22 0 01-.98-.763c-.234-.331-.35-.73-.35-1.197 0-.5.13-.912.392-1.239.266-.327.63-.579 1.092-.756a5.887 5.887 0 011.589-.357c.882-.089 1.502-.175 1.862-.259.364-.084.546-.222.546-.413v-.014a.948.948 0 00-.483-.861c-.322-.196-.782-.294-1.379-.294-.63 0-1.118.112-1.463.336-.341.22-.511.57-.511 1.05h-1.491c0-.57.147-1.052.44-1.449.3-.397.71-.698 1.233-.903.522-.21 1.122-.315 1.799-.315.62 0 1.185.096 1.694.287.513.187.921.467 1.225.84.303.373.455.838.455 1.393v3.549c0 .173.007.34.021.504.014.159.039.301.077.427.042.145.091.264.147.357.06.093.109.159.147.196H104.2a1.156 1.156 0 01-.126-.175 2.02 2.02 0 01-.14-.322 2.145 2.145 0 01-.098-.399 4.072 4.072 0 01-.028-.497l.28.196c-.14.27-.353.506-.637.707-.28.2-.619.357-1.015.469a4.762 4.762 0 01-1.309.168zm.315-1.26c.434 0 .828-.068 1.183-.203.359-.14.646-.35.861-.63.214-.285.322-.642.322-1.071v-1.232l.357.469a5.731 5.731 0 01-1.099.287c-.43.07-.873.128-1.33.175-.63.056-1.104.166-1.421.329-.318.159-.476.425-.476.798 0 .36.13.63.392.812.266.177.669.266 1.211.266zm8.648 1.26c-.443 0-.861-.049-1.253-.147a3.581 3.581 0 01-1.036-.427 2.176 2.176 0 01-.693-.707 1.899 1.899 0 01-.245-.973v-.098-.091h1.512v.14c0 .34.156.6.469.777.317.173.747.259 1.288.259.317 0 .607-.033.868-.098.266-.065.476-.166.63-.301a.65.65 0 00.238-.518c0-.34-.168-.583-.504-.728-.331-.145-.835-.273-1.512-.385a9.637 9.637 0 01-1.071-.252 3.947 3.947 0 01-.924-.406 2.116 2.116 0 01-.651-.637c-.159-.257-.238-.565-.238-.924 0-.467.14-.863.42-1.19.28-.327.658-.574 1.134-.742a4.705 4.705 0 011.575-.252 4.24 4.24 0 011.54.273c.476.177.859.436 1.148.777.289.336.434.749.434 1.239v.126h-1.505v-.049-.049a.805.805 0 00-.231-.595 1.411 1.411 0 00-.602-.343 2.49 2.49 0 00-.777-.119c-.252 0-.506.028-.763.084a1.495 1.495 0 00-.63.273.612.612 0 00-.252.518c0 .224.082.404.245.539.163.13.394.24.693.329.299.084.646.161 1.043.231.364.065.719.15 1.064.252.345.098.656.229.931.392.28.163.502.373.665.63.168.257.252.572.252.945 0 .387-.089.721-.266 1.001a2.18 2.18 0 01-.728.7 3.52 3.52 0 01-1.043.406c-.387.093-.796.14-1.225.14zm7.861 0c-.443 0-.861-.049-1.253-.147a3.581 3.581 0 01-1.036-.427 2.176 2.176 0 01-.693-.707 1.899 1.899 0 01-.245-.973v-.098-.091h1.512v.14c0 .34.157.6.469.777.318.173.747.259 1.288.259.318 0 .607-.033.868-.098.266-.065.476-.166.63-.301a.65.65 0 00.238-.518c0-.34-.168-.583-.504-.728-.331-.145-.835-.273-1.512-.385a9.743 9.743 0 01-1.071-.252 3.984 3.984 0 01-.924-.406 2.138 2.138 0 01-.651-.637c-.158-.257-.238-.565-.238-.924 0-.467.14-.863.42-1.19.28-.327.658-.574 1.134-.742a4.705 4.705 0 011.575-.252c.556 0 1.069.091 1.54.273.476.177.859.436 1.148.777.29.336.434.749.434 1.239v.126h-1.505v-.049-.049a.805.805 0 00-.231-.595 1.405 1.405 0 00-.602-.343 2.48 2.48 0 00-.777-.119c-.252 0-.506.028-.763.084a1.495 1.495 0 00-.63.273.612.612 0 00-.252.518c0 .224.082.404.245.539.164.13.395.24.693.329.299.084.647.161 1.043.231.364.065.719.15 1.064.252.346.098.656.229.931.392.28.163.502.373.665.63.168.257.252.572.252.945 0 .387-.088.721-.266 1.001a2.18 2.18 0 01-.728.7 3.52 3.52 0 01-1.043.406 5.21 5.21 0 01-1.225.14zM128.687 72l-1.904-7.434h1.232l1.827 6.881h-.259l1.19-6.881h1.575L130.78 72h-2.093zm-5.075 0l-1.575-7.434h1.575l1.204 6.881h-.266l1.813-6.881h1.232L125.719 72h-2.107zm13.557.14c-.765 0-1.442-.166-2.03-.497a3.602 3.602 0 01-1.372-1.365c-.327-.583-.49-1.25-.49-2.002 0-.747.163-1.407.49-1.981a3.503 3.503 0 011.372-1.351c.588-.327 1.265-.49 2.03-.49.765 0 1.44.163 2.023.49a3.445 3.445 0 011.372 1.351c.331.574.497 1.234.497 1.981 0 .751-.166 1.419-.497 2.002a3.54 3.54 0 01-1.372 1.365c-.583.331-1.258.497-2.023.497zm0-1.302c.467 0 .877-.105 1.232-.315a2.19 2.19 0 00.833-.889c.201-.387.301-.84.301-1.358 0-.513-.1-.959-.301-1.337a2.153 2.153 0 00-.833-.875 2.415 2.415 0 00-1.232-.308c-.462 0-.873.103-1.232.308a2.153 2.153 0 00-.833.875c-.201.378-.301.824-.301 1.337 0 .518.1.97.301 1.358.201.383.478.679.833.889.359.21.77.315 1.232.315zM142.752 72v-7.434h1.519v2.373l-.406-.182c.032-.303.109-.593.231-.868.121-.275.282-.52.483-.735.205-.22.457-.392.756-.518a2.645 2.645 0 011.036-.189c.298 0 .539.023.721.07.186.047.301.084.343.112l-.322 1.428a1.417 1.417 0 00-.287-.126c-.14-.051-.336-.077-.588-.077-.383 0-.7.068-.952.203a1.64 1.64 0 00-.602.539c-.15.224-.257.469-.322.735a3.468 3.468 0 00-.091.791V72h-1.519zm8.849.147a3.338 3.338 0 01-1.687-.441c-.513-.299-.924-.737-1.232-1.316-.308-.579-.462-1.286-.462-2.121 0-.817.157-1.51.469-2.079.313-.57.726-1.001 1.239-1.295a3.27 3.27 0 011.673-.448c.579 0 1.116.14 1.61.42.5.28.901.67 1.204 1.169.304.495.455 1.066.455 1.715v.098l-.882.028v-.042-.049c0-.387-.098-.73-.294-1.029a2.08 2.08 0 00-.777-.714 2.046 2.046 0 00-1.015-.266c-.602 0-1.106.203-1.512.609-.406.401-.609 1.029-.609 1.883 0 .85.203 1.48.609 1.89.411.406.915.609 1.512.609.374 0 .719-.089 1.036-.266.318-.182.572-.43.763-.742.192-.313.287-.67.287-1.071l.882.035c0 .644-.147 1.225-.441 1.743a3.308 3.308 0 01-1.176 1.232c-.49.299-1.04.448-1.652.448zm2.387-.147V61.059h1.526V72h-1.526z"></path>
        <path
          stroke="#A2A2A8"
          d="M400.735 69.855a2.469 2.469 0 01-.797.608 2.32 2.32 0 01-1.919.036 2.452 2.452 0 01-.816-.577 2.638 2.638 0 01-.54-.873 2.772 2.772 0 01-.178-1.03c.005-.352.078-.7.212-1.022.134-.322.327-.612.568-.852m6.595 7.053c-1.399 1.14-3.102 1.771-4.86 1.802-5.727 0-9-7-9-7a15.91 15.91 0 014.14-5.197l9.72 10.395zm-6.578-11.988A7.001 7.001 0 01399 61c5.727 0 9 7 9 7a16.332 16.332 0 01-1.767 2.791l-8.951-9.581zM390 58.5L408 77"></path>
        <rect
          width="435"
          height="51"
          x="0.5"
          y="42.5"
          stroke="#F1F1F3"
          rx="9.5"></rect>
      </svg>
    );
  }
}

export default IconEyeToggle;