// **********************************************************************
//
// Copyright (c) 2003-2013 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `ssip_service.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

package SSIP;

public interface DAQPrx extends Ice.ObjectPrx
{
    public int bulkInAnalog(byte[] data);

    public int bulkInAnalog(byte[] data, java.util.Map<String, String> __ctx);

    public Ice.AsyncResult begin_bulkInAnalog(byte[] data);

    public Ice.AsyncResult begin_bulkInAnalog(byte[] data, java.util.Map<String, String> __ctx);

    public Ice.AsyncResult begin_bulkInAnalog(byte[] data, Ice.Callback __cb);

    public Ice.AsyncResult begin_bulkInAnalog(byte[] data, java.util.Map<String, String> __ctx, Ice.Callback __cb);

    public Ice.AsyncResult begin_bulkInAnalog(byte[] data, Callback_DAQ_bulkInAnalog __cb);

    public Ice.AsyncResult begin_bulkInAnalog(byte[] data, java.util.Map<String, String> __ctx, Callback_DAQ_bulkInAnalog __cb);

    public int end_bulkInAnalog(Ice.AsyncResult __result);

    public int bulkInDigital(byte[] data);

    public int bulkInDigital(byte[] data, java.util.Map<String, String> __ctx);

    public Ice.AsyncResult begin_bulkInDigital(byte[] data);

    public Ice.AsyncResult begin_bulkInDigital(byte[] data, java.util.Map<String, String> __ctx);

    public Ice.AsyncResult begin_bulkInDigital(byte[] data, Ice.Callback __cb);

    public Ice.AsyncResult begin_bulkInDigital(byte[] data, java.util.Map<String, String> __ctx, Ice.Callback __cb);

    public Ice.AsyncResult begin_bulkInDigital(byte[] data, Callback_DAQ_bulkInDigital __cb);

    public Ice.AsyncResult begin_bulkInDigital(byte[] data, java.util.Map<String, String> __ctx, Callback_DAQ_bulkInDigital __cb);

    public int end_bulkInDigital(Ice.AsyncResult __result);

    public int bulkInAccumulator(byte[] data);

    public int bulkInAccumulator(byte[] data, java.util.Map<String, String> __ctx);

    public Ice.AsyncResult begin_bulkInAccumulator(byte[] data);

    public Ice.AsyncResult begin_bulkInAccumulator(byte[] data, java.util.Map<String, String> __ctx);

    public Ice.AsyncResult begin_bulkInAccumulator(byte[] data, Ice.Callback __cb);

    public Ice.AsyncResult begin_bulkInAccumulator(byte[] data, java.util.Map<String, String> __ctx, Ice.Callback __cb);

    public Ice.AsyncResult begin_bulkInAccumulator(byte[] data, Callback_DAQ_bulkInAccumulator __cb);

    public Ice.AsyncResult begin_bulkInAccumulator(byte[] data, java.util.Map<String, String> __ctx, Callback_DAQ_bulkInAccumulator __cb);

    public int end_bulkInAccumulator(Ice.AsyncResult __result);
}
