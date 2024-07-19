import { useEffect, useState } from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import 'antd/dist/reset.css';

export const PreviewAvatar = () => {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (file) => {
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    const props = {
        beforeUpload: file => {
            handlePreviewAvatar(file);
            return false;
        },
        showUploadList: false
    };

    return (
        <div style={{ padding: 20, textAlign: 'center' }}>

            {/* <input type="file"
                onChange={handlePreviewAvatar}
            /> */}


            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> <br />
            {avatar && (
                <img src={avatar.preview} alt="avatar" width={"50%"} />
            )}
        </div>
    );
}
