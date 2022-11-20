import * as $protobuf from "protobufjs";
/** Properties of a RecordVolumeModifyVal. */
export interface IRecordVolumeModifyVal {

    /** RecordVolumeModifyVal setVolume */
    setVolume: number;

    /** RecordVolumeModifyVal isInMeeting */
    isInMeeting?: (boolean|null);

    /** RecordVolumeModifyVal setPrimitiveVolume */
    setPrimitiveVolume?: (number|null);

    /** RecordVolumeModifyVal isInSettingPage */
    isInSettingPage?: (boolean|null);
}

/** Represents a RecordVolumeModifyVal. */
export class RecordVolumeModifyVal implements IRecordVolumeModifyVal {

    /**
     * Constructs a new RecordVolumeModifyVal.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRecordVolumeModifyVal);

    /** RecordVolumeModifyVal setVolume. */
    public setVolume: number;

    /** RecordVolumeModifyVal isInMeeting. */
    public isInMeeting: boolean;

    /** RecordVolumeModifyVal setPrimitiveVolume. */
    public setPrimitiveVolume: number;

    /** RecordVolumeModifyVal isInSettingPage. */
    public isInSettingPage: boolean;

    /**
     * Creates a new RecordVolumeModifyVal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RecordVolumeModifyVal instance
     */
    public static create(properties?: IRecordVolumeModifyVal): RecordVolumeModifyVal;

    /**
     * Encodes the specified RecordVolumeModifyVal message. Does not implicitly {@link RecordVolumeModifyVal.verify|verify} messages.
     * @param message RecordVolumeModifyVal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRecordVolumeModifyVal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RecordVolumeModifyVal message, length delimited. Does not implicitly {@link RecordVolumeModifyVal.verify|verify} messages.
     * @param message RecordVolumeModifyVal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRecordVolumeModifyVal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RecordVolumeModifyVal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RecordVolumeModifyVal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RecordVolumeModifyVal;

    /**
     * Decodes a RecordVolumeModifyVal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RecordVolumeModifyVal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RecordVolumeModifyVal;

    /**
     * Verifies a RecordVolumeModifyVal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RecordVolumeModifyVal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RecordVolumeModifyVal
     */
    public static fromObject(object: { [k: string]: any }): RecordVolumeModifyVal;

    /**
     * Creates a plain object from a RecordVolumeModifyVal message. Also converts values to other types if specified.
     * @param message RecordVolumeModifyVal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RecordVolumeModifyVal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RecordVolumeModifyVal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlaybackVolumeModifyVal. */
export interface IPlaybackVolumeModifyVal {

    /** PlaybackVolumeModifyVal setVolume */
    setVolume: number;

    /** PlaybackVolumeModifyVal isInMeeting */
    isInMeeting?: (boolean|null);

    /** PlaybackVolumeModifyVal setPrimitiveVolume */
    setPrimitiveVolume?: (number|null);

    /** PlaybackVolumeModifyVal isInSettingPage */
    isInSettingPage?: (boolean|null);
}

/** Represents a PlaybackVolumeModifyVal. */
export class PlaybackVolumeModifyVal implements IPlaybackVolumeModifyVal {

    /**
     * Constructs a new PlaybackVolumeModifyVal.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlaybackVolumeModifyVal);

    /** PlaybackVolumeModifyVal setVolume. */
    public setVolume: number;

    /** PlaybackVolumeModifyVal isInMeeting. */
    public isInMeeting: boolean;

    /** PlaybackVolumeModifyVal setPrimitiveVolume. */
    public setPrimitiveVolume: number;

    /** PlaybackVolumeModifyVal isInSettingPage. */
    public isInSettingPage: boolean;

    /**
     * Creates a new PlaybackVolumeModifyVal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlaybackVolumeModifyVal instance
     */
    public static create(properties?: IPlaybackVolumeModifyVal): PlaybackVolumeModifyVal;

    /**
     * Encodes the specified PlaybackVolumeModifyVal message. Does not implicitly {@link PlaybackVolumeModifyVal.verify|verify} messages.
     * @param message PlaybackVolumeModifyVal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlaybackVolumeModifyVal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlaybackVolumeModifyVal message, length delimited. Does not implicitly {@link PlaybackVolumeModifyVal.verify|verify} messages.
     * @param message PlaybackVolumeModifyVal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlaybackVolumeModifyVal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlaybackVolumeModifyVal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlaybackVolumeModifyVal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlaybackVolumeModifyVal;

    /**
     * Decodes a PlaybackVolumeModifyVal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlaybackVolumeModifyVal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlaybackVolumeModifyVal;

    /**
     * Verifies a PlaybackVolumeModifyVal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlaybackVolumeModifyVal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlaybackVolumeModifyVal
     */
    public static fromObject(object: { [k: string]: any }): PlaybackVolumeModifyVal;

    /**
     * Creates a plain object from a PlaybackVolumeModifyVal message. Also converts values to other types if specified.
     * @param message PlaybackVolumeModifyVal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlaybackVolumeModifyVal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlaybackVolumeModifyVal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RecordVolumeVal. */
export interface IRecordVolumeVal {

    /** RecordVolumeVal volume */
    volume: number;

    /** RecordVolumeVal primitiveVolume */
    primitiveVolume?: (number|null);
}

/** Represents a RecordVolumeVal. */
export class RecordVolumeVal implements IRecordVolumeVal {

    /**
     * Constructs a new RecordVolumeVal.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRecordVolumeVal);

    /** RecordVolumeVal volume. */
    public volume: number;

    /** RecordVolumeVal primitiveVolume. */
    public primitiveVolume: number;

    /**
     * Creates a new RecordVolumeVal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RecordVolumeVal instance
     */
    public static create(properties?: IRecordVolumeVal): RecordVolumeVal;

    /**
     * Encodes the specified RecordVolumeVal message. Does not implicitly {@link RecordVolumeVal.verify|verify} messages.
     * @param message RecordVolumeVal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRecordVolumeVal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RecordVolumeVal message, length delimited. Does not implicitly {@link RecordVolumeVal.verify|verify} messages.
     * @param message RecordVolumeVal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRecordVolumeVal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RecordVolumeVal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RecordVolumeVal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RecordVolumeVal;

    /**
     * Decodes a RecordVolumeVal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RecordVolumeVal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RecordVolumeVal;

    /**
     * Verifies a RecordVolumeVal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RecordVolumeVal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RecordVolumeVal
     */
    public static fromObject(object: { [k: string]: any }): RecordVolumeVal;

    /**
     * Creates a plain object from a RecordVolumeVal message. Also converts values to other types if specified.
     * @param message RecordVolumeVal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RecordVolumeVal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RecordVolumeVal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlaybackVolumeVal. */
export interface IPlaybackVolumeVal {

    /** PlaybackVolumeVal volume */
    volume: number;

    /** PlaybackVolumeVal primitiveVolume */
    primitiveVolume?: (number|null);
}

/** Represents a PlaybackVolumeVal. */
export class PlaybackVolumeVal implements IPlaybackVolumeVal {

    /**
     * Constructs a new PlaybackVolumeVal.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlaybackVolumeVal);

    /** PlaybackVolumeVal volume. */
    public volume: number;

    /** PlaybackVolumeVal primitiveVolume. */
    public primitiveVolume: number;

    /**
     * Creates a new PlaybackVolumeVal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlaybackVolumeVal instance
     */
    public static create(properties?: IPlaybackVolumeVal): PlaybackVolumeVal;

    /**
     * Encodes the specified PlaybackVolumeVal message. Does not implicitly {@link PlaybackVolumeVal.verify|verify} messages.
     * @param message PlaybackVolumeVal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlaybackVolumeVal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlaybackVolumeVal message, length delimited. Does not implicitly {@link PlaybackVolumeVal.verify|verify} messages.
     * @param message PlaybackVolumeVal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlaybackVolumeVal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlaybackVolumeVal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlaybackVolumeVal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlaybackVolumeVal;

    /**
     * Decodes a PlaybackVolumeVal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlaybackVolumeVal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlaybackVolumeVal;

    /**
     * Verifies a PlaybackVolumeVal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlaybackVolumeVal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlaybackVolumeVal
     */
    public static fromObject(object: { [k: string]: any }): PlaybackVolumeVal;

    /**
     * Creates a plain object from a PlaybackVolumeVal message. Also converts values to other types if specified.
     * @param message PlaybackVolumeVal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlaybackVolumeVal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlaybackVolumeVal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
