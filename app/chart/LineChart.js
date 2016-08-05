/**
 * Created by ijoy on 16-7-13.
 */
import React,{Component,PropTypes} from 'react'
import{
    View,
    Text,
    requireNativeComponent
} from 'react-native'
const MPLineChart=requireNativeComponent('MPLineChart',LineChart);
export default class LineChart extends Component{
    static propTypes={
        ...View.propTypes,
        data:PropTypes.object,
        touchEnabled:PropTypes.bool,
        dragEnabled:PropTypes.bool,
        scaleEnabled:PropTypes.bool,
        scaleXEnabled:PropTypes.bool,
        pinchZoom:PropTypes.bool,
        doubleTapToZoomEnabled:PropTypes.bool,
        highlightPerDragEnabled:PropTypes.bool,
        highlightPerTapEnabled:PropTypes.bool,
        dragDecelerationEnabled:PropTypes.bool,
        dragDecelerationFrictionCoef:PropTypes.number,
        maxVisibleValueCount:PropTypes.number,
        limitLine:PropTypes.object,
        description:PropTypes.string,
        backgroundColor:PropTypes.string,
        drawGridBackground:PropTypes.bool,
        gridBackgroundColor:PropTypes.string,
        visibleXRange:PropTypes.array,
        borderColor:PropTypes.string,
        borderWidth:PropTypes.number,
        xAxis:PropTypes.object,
        yAxisLeft:PropTypes.object,
        yAxisRight:PropTypes.object,
        yAxis:PropTypes.object,
        fitScreen:PropTypes.bool,
        chartPadding:PropTypes.string,
        legend:PropTypes.object,
        viewCenter:PropTypes.array,
        zoomTo:PropTypes.object,
        extraOffsets:PropTypes.string
    }
    constructor(props){
        super(props)
    }

    render(){
        return(
            <MPLineChart {...this.props}/>
        )
    }
}
